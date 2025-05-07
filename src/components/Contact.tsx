
import React, { useState } from 'react';
import { Phone, Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="brutalist-section bg-white">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl mb-16">
          <span className="bg-black text-white px-2">Contato</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Entre em contato</h3>
            <p className="mb-8">
              Interessado em trabalhar juntos ou tem alguma pergunta? Preencha o formulário ou use 
              os canais de contato direto abaixo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-black flex items-center justify-center mr-4">
                  <Mail size={24} className="text-white" />
                </div>
                <span>email@exemplo.com</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-black flex items-center justify-center mr-4">
                  <Phone size={24} className="text-white" />
                </div>
                <span>+55 (11) 9 8765-4321</span>
              </div>
              
              <div className="flex mt-8 space-x-4">
                <a href="#" className="w-12 h-12 bg-black flex items-center justify-center hover:bg-secondary transition-colors">
                  <Github size={24} className="text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-black flex items-center justify-center hover:bg-secondary transition-colors">
                  <Linkedin size={24} className="text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-black flex items-center justify-center hover:bg-secondary transition-colors">
                  <Instagram size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-bold">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="brutalist-input"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-bold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="brutalist-input"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-bold">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="brutalist-input"
                  placeholder="Escreva sua mensagem aqui..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button type="submit" className="brutalist-button w-full">
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
