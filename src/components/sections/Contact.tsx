import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Taniyamaheshwari21',
    color: 'hover:bg-foreground hover:text-background'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/taniya-maheshwari-81758624a/',
    color: 'hover:bg-blue-600 hover:text-white'
  }
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'taniyamah21@gmail.com',
    href: 'mailto:taniyamah21@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7819933963',
    href: 'tel:+91 7819933963'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Delhi',
    href: '#'
  }
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="book-page py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="sticky-note inline-block mb-8 rotate-2">
            <div className="text-sm font-medium">Let's Connect!</div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6 text-shadow">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="paper-element p-8 rounded-2xl">
            <div className="paper-clip"></div>
            
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="cursor-text"
                    placeholder="Rita Ora"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="cursor-text"
                    placeholder="rita@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="cursor-text"
                  placeholder="Let's work together!"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="cursor-text min-h-[120px]"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-4"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="paper-element p-8 rounded-2xl">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-muted 
                               transition-colors duration-200 cursor-pointer group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center
                                    group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium text-foreground">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="paper-element p-8 rounded-2xl">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Follow Me
              </h3>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        w-12 h-12 bg-muted rounded-lg flex items-center justify-center
                        transition-all duration-300 cursor-pointer transform hover:scale-110
                        ${social.color}
                      `}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 text-center">
                <p className="text-muted-foreground text-sm">
                  Let's connect and build amazing things together!
                </p>
              </div>
            </div>

            {/* Fun Quote */}
            <div className="polaroid" data-caption="Always coding with ❤️">
              <div className="w-full h-32 bg-gradient-to-br from-primary-soft to-accent-soft rounded-lg 
                            flex items-center justify-center text-center p-4">
                <div>
                  <div className="text-2xl mb-2">💻✨</div>
                  <p className="text-sm text-foreground font-medium">
                    "Code is like humor. When you have to explain it, it's bad."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- Cory House</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Note */}
        <div className="text-center mt-16">
          <div className="sticky-note inline-block rotate-1 max-w-md">
            <div className="text-center">
              <Heart size={24} className="text-red-500 mx-auto mb-2" />
              <p className="text-sm font-medium mb-1">Thank you for visiting!</p>
              <p className="text-xs">I look forward to hearing from you and discussing how we can work together.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};