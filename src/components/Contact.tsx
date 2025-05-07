
import React, { useState } from 'react';
import { Phone, Mail, Github, Linkedin } from 'lucide-react';
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
        <h2 className="text-4xl md:text-5xl mb-12">
          <span className="bg-black text-white px-2">Contato</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6">Entre em contato</h3>
            <p className="mb-6 text-gray-700">
              Interessado em trabalhar juntos ou tem alguma pergunta? Preencha o formulário ou use 
              os canais de contato direto abaixo.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-black flex items-center justify-center mr-4">
                  <Mail size={20} className="text-white" />
                </div>
                <span className="text-gray-700">email@exemplo.com</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-black flex items-center justify-center mr-4">
                  <Phone size={20} className="text-white" />
                </div>
                <span className="text-gray-700">+55 (11) 9 8765-4321</span>
              </div>
              
              <div className="flex mt-6 space-x-3">
                <a href="#" className="w-10 h-10 bg-black flex items-center justify-center hover:bg-accent transition-colors">
                  <Github size={20} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-black flex items-center justify-center hover:bg-accent transition-colors">
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  rows={4}
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
