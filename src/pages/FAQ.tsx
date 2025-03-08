import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is CyberFirm Firmware?",
    answer: "CyberFirm Firmware is a premium custom firmware solution that provides fully emulated 1:1 firmware for various devices, ensuring compatibility with major anti-cheat systems while maintaining optimal performance and security."
  },
  {
    question: "How does the warranty work?",
    answer: "Our warranty coverage varies by product, ranging from 1 to 3 months, with some products offering permanent warranty. During the warranty period, we provide full support and replacements if needed."
  },
  {
    question: "Is this firmware safe to use?",
    answer: "Yes, our firmware is thoroughly tested and secure. We implement multiple safety measures and regularly update our products to ensure maximum security and stability."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and various cryptocurrency payments including Bitcoin, Ethereum, and others."
  },
  {
    question: "How long does delivery take?",
    answer: "Digital delivery is instant after payment confirmation. You'll receive download instructions and access credentials via email."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we provide 24/7 customer support through our dedicated support team. You can reach us via email, Discord, or our support ticket system."
  },
  {
    question: "What is the difference between your firmware versions?",
    answer: "We offer different versions tailored to specific needs - from basic firmware for standard usage to premium versions with advanced features and customization options."
  },
  {
    question: "Can I upgrade my firmware later?",
    answer: "Yes, we offer upgrade paths for all our firmware versions. Existing customers get special discounts on upgrades."
  },
  {
    question: "What happens if my firmware stops working?",
    answer: "Our support team will assist you immediately. If the issue can't be resolved, we'll provide a replacement under warranty."
  },
  {
    question: "Do you offer bulk discounts?",
    answer: "Yes, we offer special pricing for bulk purchases. Contact our sales team for custom quotes."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#070B14] pt-16">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center text-cyan-400 mb-16 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="rounded-lg bg-[#0A1018] border border-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-cyan-400/5 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-100">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-cyan-400 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-400 bg-[#070B14]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
