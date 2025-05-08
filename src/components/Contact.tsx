
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
    <section id="contact" className="brutalist-section bg-white relative">
      <div className="grain-overlay"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl mb-12 animate-fade-in-up">
          <span className="bg-black text-white px-2 py-1 brutal-box inline-block">Contato</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-fade-in-up delay-100">
            <h3 className="text-xl font-bold mb-6">Entre em contato</h3>
            <p className="mb-6 text-gray-700">
              Interessado em trabalhar juntos ou tem alguma pergunta? Preencha o formulário ou use 
              os canais de contato direto abaixo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center animate-fade-in-up delay-200">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center mr-4 brutal-box">
                  <Mail size={20} className="text-white" />
                </div>
                <span className="text-gray-700">email@exemplo.com</span>
              </div>
              
              <div className="flex items-center animate-fade-in-up delay-300">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center mr-4 brutal-box">
                  <Phone size={20} className="text-white" />
                </div>
                <span className="text-gray-700">+55 (11) 9 8765-4321</span>
              </div>
              
              <div className="flex mt-6 space-x-4 animate-fade-in-up delay-400">
                <a href="#" className="w-12 h-12 bg-black flex items-center justify-center brutal-box">
                  <Github size={20} className="text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-black flex items-center justify-center brutal-box">
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>

              <div className="mt-8 pt-8 border-t-2 border-black animate-fade-in-up delay-500">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-black"></div>
                  <span className="text-sm uppercase font-bold">Disponível para projetos</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up delay-200">
            <div className="brutal-box p-6 bg-white">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-bold">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="brutalist-input brutal-box"
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
                    className="brutalist-input brutal-box"
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
                    className="brutalist-input brutal-box"
                    placeholder="Escreva sua mensagem aqui..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button type="submit" className="brutalist-button w-full brutal-box">
                  Enviar mensagem
                </Button>
              </form>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-black -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
