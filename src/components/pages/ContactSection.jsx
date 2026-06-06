import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Mail, Clock, Send, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner'; // ✅ Changed import
import { whatsappNumber, phoneNumber } from '../../data/carsData';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nom requis';
    if (!formData.email.trim()) newErrors.email = 'Email requis';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.message.trim()) newErrors.message = 'Message requis';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    const whatsappMessage = `Nouvelle demande de réservation :
Nom : ${formData.name}
Email : ${formData.email}
Message : ${formData.message}`;

    try {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      setFormData({ name: '', email: '', message: '' });
      toast.success('Message envoyé !', {
        description: 'Vous allez être redirigé vers WhatsApp. Notre équipe vous répondra rapidement.',
        duration: 4000,
      });
    } catch (error) {
      toast.error('Erreur', {
        description: "Une erreur s'est produite. Veuillez réessayer.",
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <section id="contact" className="w-full py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            Contactez-<span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Nous</span>
          </motion.h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
            Une question ? Une réservation ? Nous sommes à votre écoute 7j/7.
          </p>
        </div>

        {/* Two‑column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column – Contact information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Informations</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-orange-50 rounded-xl">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Agadir, Maroc</p>
                    <p className="text-gray-500 text-sm">Zone touristique, près de la plage</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-orange-50 rounded-xl">
                    <Phone className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Téléphone</p>
                    <a href={`tel:${phoneNumber}`} className="text-gray-500 text-sm hover:text-orange-500 transition-colors">
                      {phoneNumber}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-orange-50 rounded-xl">
                    <MessageCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">WhatsApp</p>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 text-sm hover:text-orange-500 transition-colors"
                    >
                      +212 {whatsappNumber}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-orange-50 rounded-xl">
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Horaires d'ouverture</p>
                    <p className="text-gray-500 text-sm">Lundi – Samedi : 9h00 – 19h00</p>
                    <p className="text-gray-500 text-sm">Dimanche : fermé</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <h4 className="font-semibold text-gray-800">Email professionnel</h4>
                  </div>
                  <a
                    href="mailto:contact@kriagadir.com"
                    className="text-gray-600 text-sm hover:text-orange-500 transition-colors"
                  >
                    contact@kriagadir.com
                  </a>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                      ✓ Réponse sous 24h maximum
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right column – Contact form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-6 md:p-8">
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Envoyez-nous un message</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Remplissez le formulaire, nous vous répondrons directement via WhatsApp.
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="name" className="text-gray-700">Nom complet *</Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`mt-1.5 border-gray-200 focus:border-orange-300 focus:ring-orange-200 ${errors.name ? 'border-red-400 focus:border-red-400' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Label htmlFor="email" className="text-gray-700">Adresse email *</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`mt-1.5 border-gray-200 focus:border-orange-300 focus:ring-orange-200 ${errors.email ? 'border-red-400' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Label htmlFor="message" className="text-gray-700">Votre message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Détails de votre demande (dates, véhicule souhaité...)"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`mt-1.5 border-gray-200 focus:border-orange-300 focus:ring-orange-200 resize-none ${errors.message ? 'border-red-400' : ''}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full shadow-md transition-all duration-200"
                    >
                      {isLoading ? (
                        <>Envoi en cours...</>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Envoyer sur WhatsApp
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>

                <motion.p variants={itemVariants} className="text-xs text-gray-400 text-center mt-6">
                  Nous utilisons WhatsApp pour vous répondre plus rapidement. Aucune donnée stockée.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;