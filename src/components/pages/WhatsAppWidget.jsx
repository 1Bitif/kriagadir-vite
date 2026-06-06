import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { whatsappNumber } from '../../data/carsData';

const WhatsAppWidget = ({ showChatWidget, setShowChatWidget }) => {
  const handleOpen = () => setShowChatWidget(true);
  const handleClose = () => setShowChatWidget(false);
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  // Animation variants
  const buttonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.2 } },
  };

  const widgetVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: 'easeOut' } },
    exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence mode="wait">
        {!showChatWidget ? (
          // Floating WhatsApp button (closed state)
          <motion.div
            key="button"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Button
              onClick={handleOpen}
              className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-200"
              aria-label="Open WhatsApp chat"
            >
              <MessageCircle className="h-6 w-6 text-white" />
            </Button>
          </motion.div>
        ) : (
          // Chat widget popup (open state)
          <motion.div
            key="widget"
            variants={widgetVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-80 md:w-96"
          >
            <Card className="border-0 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white relative">
                <button
                  onClick={handleClose}
                  className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-300 rounded-full absolute -top-1 -right-1 animate-pulse" />
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">KriAgadir PRESTIGE CARS</p>
                    <p className="text-xs text-green-100 flex items-center gap-1">
                      <Zap className="h-3 w-3" /> Usually responds in a few minutes
                    </p>
                  </div>
                </div>
              </div>

              <CardContent className="p-5 space-y-4">
                <p className="text-gray-700 text-sm">
                  Need a car? Our team is here to help you!
                </p>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Write to us on WhatsApp
                </Button>
                <div className="flex items-center justify-end gap-1 text-xs text-gray-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span>Online</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppWidget;