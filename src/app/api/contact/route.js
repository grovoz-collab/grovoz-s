// /pages/api/contact.js or /app/api/contact/route.js (MODIFIED)
import nodemailer from "nodemailer";
import { NextResponse } from 'next/server';

function generateMailOptions(body) {
    // --- 1. Form Detection Logic ---
    
    // Type 1: Original Comprehensive Form (Unchanged)
    const isOriginalForm = 
        !!body.fullName && 
        !!body.businessName &&
        !!body.serviceRegion;

    // Type 2: Modal Contact Form (The General 'Let's Talk' Modal) (Unchanged)
    // Requires name, email, service, and company
    const isModalContactForm = 
        !!body.name && 
        !!body.email && 
        !!body.service && 
        !!body.company; 
        
    // Type 3: Service Inquiry Modal (The Service Card Click Modal) (RESTORED DETECTION)
    // Requires name, email, service, phone, and website
    const isServiceInquiryModal = 
        !!body.name && 
        !!body.email && 
        !!body.service &&
        !!body.phone && 
        !!body.website; 

    // Type 4: Current Canvas Simple Contact Form (NEW TYPE)
    // Requires name, email, service, and message
    const isCurrentCanvasForm = 
        !!body.name && 
        !!body.email && 
        !!body.service &&
        !!body.message;


    // --- 2. Form Handling and Data Generation ---

    if (isOriginalForm) {
        // --- ORIGINAL Comprehensive Form (Type 1) ---
        const { fullName, businessName, email,  serviceRegion, currentChallenges } = body;

        return {
            subject: `New Comprehensive Inquiry from ${fullName}`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #10B981;">Original Comprehensive Form Submission (Type 1)</h2>
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Business:</strong> ${businessName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Region:</strong> ${serviceRegion}</p>
                    <p><strong>Challenges:</strong> ${currentChallenges || 'N/A'}</p>
                </div>
            `,
            formType: 'Original Comprehensive (Type 1)'
        };
        
    } else if (isModalContactForm) {
        // --- Modal Contact Form (General 'Let's Talk' Form) (Type 2) ---
        const { name, email, company, website, service, message } = body; 
        
        return {
            subject: `NEW GENERAL CONTACT (Type 2): ${service} from ${name}`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #4F46E5;">General Contact Submission (Modal - Type 2)</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Company:</strong> ${company || 'N/A'}</p>
                    <p><strong>Website:</strong> ${website || 'N/A'}</p>
                    <p><strong>Service Selected:</strong> ${service}</p>
                    <p><strong>Message:</strong> ${message || 'No message provided.'}</p>
                </div>
            `,
            formType: 'Modal Contact (Type 2)'
        };

    } else if (isServiceInquiryModal) {
        // --- Service Inquiry Modal (Type 3) ---
        // Requires phone and website for detection
        const { name, email, phone, website, service, message } = body; 
        
        return {
            subject: `⭐ NEW SERVICE INQUIRY (Type 3): ${service} from ${name}`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
                    <h2 style="color: #FBBF24;">Service Card Inquiry Submission (Type 3 - Detailed)</h2>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr><td style="padding: 5px 0; border-bottom: 1px solid #eee;"><strong>Service Focus:</strong></td><td style="padding: 5px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #1D4ED8;">${service}</td></tr>
                        <tr><td style="padding: 5px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 5px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
                        <tr><td style="padding: 5px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 5px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td></tr>
                        <tr><td style="padding: 5px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 5px 0; border-bottom: 1px solid #eee;">${phone || 'N/A'}</td></tr>
                        <tr><td style="padding: 5px 0; border-bottom: 1px solid #eee;"><strong>Website:</strong></td><td style="padding: 5px 0; border-bottom: 1px solid #eee;"><a href="${website}" style="color: #2563EB;">${website || 'N/A'}</a></td></tr>
                    </table>
                    
                    <h4 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-bottom: 10px;">Project Details:</h4>
                    <p style="background-color: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 4px;">
                        ${message || 'No specific details provided.'}
                    </p>

                    <p style="margin-top: 20px; font-size: 0.9em; color: #666;">A specialist should follow up directly based on the service focus.</p>
                </div>
            `,
            formType: 'Service Inquiry (Type 3)'
        };
    } else if (isCurrentCanvasForm) {
        // --- Current Canvas Simple Contact Form (Type 4) ---
        // Fields available: name, email, phone (optional), service, message
        const { name, email, phone, service, message } = body; 
        
        return {
            subject: `📢 NEW SIMPLE INQUIRY (Type 4): ${service} from ${name}`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #eef7ff;">
                    <h2 style="color: #1E40AF;">Simple Canvas Submission (Type 4)</h2>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr><td style="padding: 5px 0; border-bottom: 1px solid #ddd; width: 30%;"><strong>Name:</strong></td><td style="padding: 5px 0; border-bottom: 1px solid #ddd;">${name}</td></tr>
                        <tr><td style="padding: 5px 0; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 5px 0; border-bottom: 1px solid #ddd;"><a href="mailto:${email}" style="color: #2563EB;">${email}</a></td></tr>
                        <tr><td style="padding: 5px 0; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 5px 0; border-bottom: 1px solid #ddd;">${phone || 'N/A'}</td></tr>
                        <tr><td style="padding: 5px 0; border-bottom: 1px solid #ddd;"><strong>Service:</strong></td><td style="padding: 5px 0; border-bottom: 1px solid #ddd; font-weight: bold; color: #059669;">${service}</td></tr>
                    </table>
                    
                    <h4 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-bottom: 10px;">Message:</h4>
                    <p style="background-color: #fff; border: 1px solid #ccc; padding: 15px; border-radius: 4px; white-space: pre-wrap;">
                        ${message}
                    </p>
                </div>
            `,
            formType: 'Current Canvas Form (Type 4)'
        };
    } else {
        // Validation failed or unknown form type (Unchanged)
        return null;
    }
}


export async function POST(req) {
    try {
        const body = await req.json();
        const mailData = generateMailOptions(body);

        if (!mailData) {
            return NextResponse.json(
                { message: 'Invalid form submission: missing required data for known form types.' }, 
                { status: 400 }
            );
        }

        // Setup transporter (use environment variables)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 465, 
            secure: true, 
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER, 
            to: process.env.SMTP_USER,
            subject: mailData.subject, 
            html: mailData.html, 
        };

        await transporter.sendMail(mailOptions);

        console.log(`✅ Successfully sent email for form type: ${mailData.formType}`);

        return NextResponse.json({ success: true, formType: mailData.formType });
    } catch (error) {
        console.error("❌ Error processing contact form submission:", error);
        
        return NextResponse.json(
            { error: "Server error during email sending. Please check SMTP configuration." },
            { status: 500 }
        );
    }
}
