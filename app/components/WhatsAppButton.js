import { MessageSquare } from 'lucide-react';

// Sticky WhatsApp Button
const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
            aria-label="Contact us on WhatsApp"
        >
            <MessageSquare size={24} />
        </a>
    );
};

export default WhatsAppButton;
