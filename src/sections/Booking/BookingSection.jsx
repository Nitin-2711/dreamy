import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const BookingSection = () => {
  const { theme } = useTheme();
  // Booking States
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [checkInTime, setCheckInTime] = useState('02:00 PM');
  const [checkOutTime, setCheckOutTime] = useState('11:00 AM');
  const [guests, setGuests] = useState(1);
  const [showCalendarPopup, setShowCalendarPopup] = useState(false);
  const [activeDateSelector, setActiveDateSelector] = useState('in'); // 'in' or 'out'
  const [hoveredDate, setHoveredDate] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Custom Calendar Navigation
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Pricing constants
  const BASE_PRICE = 7500; // ₹ per night
  const SERVICE_FEE = 1500;
  const GST_RATE = 0.18;

  // Generate calendar days
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    
    // Padding days from previous month
    const prevMonthDays = new Date(year, month, 0).getDate();
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthDays - i),
        isCurrentMonth: false,
        disabled: true,
      });
    }
    
    // Current month days
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 1; i <= totalDays; i++) {
      const dayDate = new Date(year, month, i);
      const isPast = dayDate < today;
      days.push({
        date: dayDate,
        isCurrentMonth: true,
        disabled: isPast,
      });
    }
    
    return days;
  };

  const days = getDaysInMonth(currentMonth);

  // Month navigation
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  // Date handlers
  const handleDateClick = (dayDate) => {
    if (activeDateSelector === 'in') {
      setCheckInDate(dayDate);
      // Clear checkout if checkin is after checkout
      if (checkOutDate && dayDate >= checkOutDate) {
        setCheckOutDate(null);
      }
      setActiveDateSelector('out');
    } else {
      if (dayDate <= checkInDate) {
        setCheckInDate(dayDate);
        setCheckOutDate(null);
      } else {
        setCheckOutDate(dayDate);
        setShowCalendarPopup(false);
      }
    }
  };

  // Calculate stats
  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const diffTime = Math.abs(checkOutDate - checkInDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const guestExtraCharge = guests > 2 ? (guests - 2) * 1500 * (nights || 1) : 0;
  const rawSubtotal = BASE_PRICE * (nights || 1) + guestExtraCharge;
  const subtotal = nights > 0 ? rawSubtotal : 0;
  const gst = Math.round(subtotal * GST_RATE);
  const total = subtotal > 0 ? subtotal + SERVICE_FEE + gst : 0;

  // Format Date for Input
  const formatDateString = (date) => {
    if (!date) return 'Select Date';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Check if date is in range
  const isDateInRange = (date) => {
    if (!checkInDate) return false;
    if (checkOutDate) {
      return date > checkInDate && date < checkOutDate;
    }
    if (hoveredDate && activeDateSelector === 'out') {
      return date > checkInDate && date < hoveredDate;
    }
    return false;
  };

  const isDateSelected = (date) => {
    return (
      (checkInDate && date.toDateString() === checkInDate.toDateString()) ||
      (checkOutDate && date.toDateString() === checkOutDate.toDateString())
    );
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!checkInDate || !checkOutDate) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hi! I would like to book the Dreamy Studio Apartment at Galaxy Blue Sapphire Plaza.

📅 Stay Details:
- Check-in: ${formatDateString(checkInDate)} at ${checkInTime}
- Check-out: ${formatDateString(checkOutDate)} at ${checkOutTime}
- Nights: ${nights}
- Guests: ${guests}

💳 Pricing Breakdown:
- Base Rate: ₹${BASE_PRICE}/night
- Additional Guest Fee: ₹${guestExtraCharge}
- Services Fee: ₹${SERVICE_FEE}
- GST: ₹${gst}
- Total Amount: ₹${total}

Please confirm availability. Thank you!`;

    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="booking" className="py-32 relative bg-theme-bg z-10 transition-colors duration-700">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-warm-beige/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-warm-beige/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-warm-beige text-xs tracking-[0.3em] uppercase mb-4 block"
          >
            Reservations
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-theme-text"
          >
            Reserve Your <span className="italic text-warm-beige">Cinematic Stay</span>
          </motion.h2>
        </div>

        {/* Content Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visual Summary & Details */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 space-y-6"
            >
              <h3 className="font-heading text-2xl text-theme-text">Your Premium Gateway</h3>
              <p className="text-theme-text/80 leading-relaxed font-normal text-sm">
                Experience high-rise modern luxury at Greater Noida West. With day and night customization, premium ambient lighting, and bespoke design.
              </p>

              <div className="space-y-4 pt-4 border-t border-glass-border">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-warm-beige/10 flex items-center justify-center text-warm-beige">
                    <CalendarIcon size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-theme-text">Flexible Scheduling</h4>
                    <p className="text-xs text-theme-text-secondary">Day-night visual previews & instant WhatsApp reservation</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-warm-beige/10 flex items-center justify-center text-warm-beige">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-theme-text">Seamless Check-in</h4>
                    <p className="text-xs text-theme-text-secondary">Early check-in options and dynamic time selectors</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-warm-beige/10 flex items-center justify-center text-warm-beige">
                    <Users size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-theme-text">Tailored Hospitality</h4>
                    <p className="text-xs text-theme-text-secondary">Configurable guest counts up to 4 adults</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Embedded Live Day/Night Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden aspect-video group"
            >
              <img 
                src={checkInDate ? (theme === 'dark' ? "/suite.png" : "/suite_day.png") : (theme === 'dark' ? "/hero.png" : "/hero_day.png")} 
                alt="Selected ambiance" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-warm-beige font-mono">Dynamic Preview</span>
                <p className="text-sm text-theme-text font-medium mt-1">Preview adapts based on stay configuration</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Booking Card */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="booking-form"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="glass-card p-8 md:p-10 relative overflow-hidden"
                >
                  {/* Decorative glowing lines */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-warm-beige/40 to-transparent"></div>

                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-warm-beige font-mono">Rate starts from</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-3xl font-heading text-theme-text">₹{BASE_PRICE}</span>
                        <span className="text-sm text-theme-text-secondary font-normal">/ night</span>
                      </div>
                    </div>
                    <div className="glass px-3 py-1 rounded-full text-xs text-warm-beige border-warm-beige/20">
                      ★ 4.98 (64 Reviews)
                    </div>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    {/* Check In / Out Custom Dropdown Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Check-In selector */}
                      <button
                        type="button"
                        onClick={() => {
                          setActiveDateSelector('in');
                          setShowCalendarPopup(true);
                        }}
                        className={`text-left p-4 rounded-xl border transition-all duration-300 relative ${
                          activeDateSelector === 'in' && showCalendarPopup
                            ? 'border-warm-beige bg-warm-beige/5 shadow-[0_0_15px_rgba(214,194,168,0.1)]'
                            : 'border-glass-border hover:border-warm-beige/40'
                        }`}
                      >
                        <span className="block text-[10px] uppercase tracking-widest text-theme-text-secondary">Check In</span>
                        <span className="block font-heading text-lg mt-1 truncate">
                          {checkInDate ? formatDateString(checkInDate) : 'Select Date'}
                        </span>
                        <div className="absolute top-4 right-4 text-warm-beige/40">
                          <CalendarIcon size={14} />
                        </div>
                      </button>

                      {/* Check-Out selector */}
                      <button
                        type="button"
                        onClick={() => {
                          setActiveDateSelector('out');
                          setShowCalendarPopup(true);
                        }}
                        className={`text-left p-4 rounded-xl border transition-all duration-300 relative ${
                          activeDateSelector === 'out' && showCalendarPopup
                            ? 'border-warm-beige bg-warm-beige/5 shadow-[0_0_15px_rgba(214,194,168,0.1)]'
                            : 'border-glass-border hover:border-warm-beige/40'
                        }`}
                      >
                        <span className="block text-[10px] uppercase tracking-widest text-theme-text-secondary">Check Out</span>
                        <span className="block font-heading text-lg mt-1 truncate">
                          {checkOutDate ? formatDateString(checkOutDate) : 'Select Date'}
                        </span>
                        <div className="absolute top-4 right-4 text-warm-beige/40">
                          <CalendarIcon size={14} />
                        </div>
                      </button>
                    </div>

                    {/* Check-In / Check-Out Time selection */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-glass-border hover:border-warm-beige/40 relative">
                        <label className="block text-[10px] uppercase tracking-widest text-theme-text-secondary mb-1">Check-in Time</label>
                        <select 
                          value={checkInTime} 
                          onChange={(e) => setCheckInTime(e.target.value)}
                          className="bg-transparent text-theme-text border-none outline-none font-medium w-full cursor-pointer pr-4 appearance-none focus:ring-0"
                        >
                          <option value="12:00 PM" className="bg-theme-bg text-theme-text">12:00 PM</option>
                          <option value="02:00 PM" className="bg-theme-bg text-theme-text">02:00 PM (Default)</option>
                          <option value="04:00 PM" className="bg-theme-bg text-theme-text">04:00 PM</option>
                          <option value="06:00 PM" className="bg-theme-bg text-theme-text">06:00 PM</option>
                        </select>
                        <div className="absolute top-6 right-4 pointer-events-none text-warm-beige/40">
                          <Clock size={14} />
                        </div>
                      </div>

                      <div className="p-4 rounded-xl border border-glass-border hover:border-warm-beige/40 relative">
                        <label className="block text-[10px] uppercase tracking-widest text-theme-text-secondary mb-1">Check-out Time</label>
                        <select 
                          value={checkOutTime} 
                          onChange={(e) => setCheckOutTime(e.target.value)}
                          className="bg-transparent text-theme-text border-none outline-none font-medium w-full cursor-pointer pr-4 appearance-none focus:ring-0"
                        >
                          <option value="09:00 AM" className="bg-theme-bg text-theme-text">09:00 AM</option>
                          <option value="11:00 AM" className="bg-theme-bg text-theme-text">11:00 AM (Default)</option>
                          <option value="01:00 PM" className="bg-theme-bg text-theme-text">01:00 PM</option>
                          <option value="03:00 PM" className="bg-theme-bg text-theme-text">03:00 PM</option>
                        </select>
                        <div className="absolute top-6 right-4 pointer-events-none text-warm-beige/40">
                          <Clock size={14} />
                        </div>
                      </div>
                    </div>

                    {/* Guests selection */}
                    <div className="p-4 rounded-xl border border-glass-border flex justify-between items-center">
                      <div>
                        <span className="block text-[10px] uppercase tracking-widest text-theme-text-secondary">Guests count</span>
                        <span className="block font-heading text-lg mt-1">{guests} {guests > 1 ? 'Guests' : 'Guest'}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setGuests(prev => Math.max(1, prev - 1))}
                          className="w-10 h-10 rounded-full border border-glass-border hover:border-warm-beige/50 flex items-center justify-center text-theme-text transition-colors"
                        >
                          -
                        </button>
                        <span className="font-heading font-medium text-lg w-4 text-center">{guests}</span>
                        <button
                          type="button"
                          onClick={() => setGuests(prev => Math.min(4, prev + 1))}
                          className="w-10 h-10 rounded-full border border-glass-border hover:border-warm-beige/50 flex items-center justify-center text-theme-text transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Total & Pricing Details */}
                    {nights > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="border-t border-glass-border pt-6 space-y-3"
                      >
                        <div className="flex justify-between text-sm">
                          <span className="text-theme-text-secondary">₹{BASE_PRICE} x {nights} nights</span>
                          <span className="font-medium">₹{BASE_PRICE * nights}</span>
                        </div>
                        {guests > 2 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-theme-text-secondary">Extra Guest Charge ({guests - 2} Guests)</span>
                            <span className="font-medium">₹{guestExtraCharge}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-sm">
                          <span className="text-theme-text-secondary">Services Charge</span>
                          <span className="font-medium">₹{SERVICE_FEE}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-theme-text-secondary">GST (18%)</span>
                          <span className="font-medium">₹{gst}</span>
                        </div>
                        
                        <div className="flex justify-between border-t border-glass-border pt-4 text-lg">
                          <span className="font-heading text-theme-text">Total</span>
                          <span className="font-heading text-warm-beige font-semibold">₹{total}</span>
                        </div>
                      </motion.div>
                    )}

                    {/* CTA Confirmation Button */}
                    <button
                      type="submit"
                      disabled={!checkInDate || !checkOutDate || isSubmitting}
                      className={`w-full py-4 rounded-xl font-medium tracking-widest text-xs uppercase flex items-center justify-center gap-3 transition-all duration-300 relative overflow-hidden ${
                        checkInDate && checkOutDate 
                          ? 'bg-warm-beige text-theme-bg hover:shadow-[0_0_30px_rgba(214,194,168,0.3)] cursor-pointer' 
                          : 'bg-glass-white border border-glass-border text-theme-text/40 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-theme-bg border-t-transparent rounded-full animate-spin"></div>
                          <span>Confirming Experience...</span>
                        </>
                      ) : (
                        <>
                          <ArrowRight size={14} />
                          <span>{checkInDate && checkOutDate ? 'Proceed to Confirmation' : 'Select Dates'}</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Datepicker Floating Glass Popup */}
                  <AnimatePresence>
                    {showCalendarPopup && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute inset-x-6 top-20 z-50 bg-theme-bg border border-warm-beige/40 p-6 rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.9)]"
                      >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6 border-b border-glass-border pb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xs tracking-[0.2em] uppercase font-mono text-warm-beige font-semibold">
                              {activeDateSelector === 'in' ? 'Select Check-In Date' : 'Select Check-Out Date'}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setShowCalendarPopup(false)}
                            className="text-theme-text-secondary hover:text-warm-beige transition-colors p-1.5 rounded-full hover:bg-warm-beige/10"
                          >
                            <X size={16} />
                          </button>
                        </div>

                        {/* Month Selector */}
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-heading text-base font-bold text-theme-text tracking-wide">
                            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                          </h4>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={prevMonth}
                              className="p-1.5 rounded-full border border-warm-beige/30 text-theme-text hover:text-warm-beige hover:border-warm-beige hover:bg-warm-beige/10 transition-colors cursor-pointer"
                            >
                              <ChevronLeft size={16} />
                            </button>
                            <button
                              type="button"
                              onClick={nextMonth}
                              className="p-1.5 rounded-full border border-warm-beige/30 text-theme-text hover:text-warm-beige hover:border-warm-beige hover:bg-warm-beige/10 transition-colors cursor-pointer"
                            >
                              <ChevronRight size={16} />
                            </button>
                          </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1 text-center text-xs font-mono mb-3 text-warm-beige font-bold uppercase tracking-widest border-b border-glass-border/30 pb-2">
                          <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                        </div>

                        <div className="grid grid-cols-7 gap-1">
                          {days.map((day, idx) => {
                            const selected = isDateSelected(day.date);
                            const inRange = isDateInRange(day.date);
                            const isCheckIn = checkInDate && day.date.toDateString() === checkInDate.toDateString();
                            const isCheckOut = checkOutDate && day.date.toDateString() === checkOutDate.toDateString();

                            return (
                              <button
                                key={idx}
                                type="button"
                                disabled={day.disabled}
                                onMouseEnter={() => !day.disabled && setHoveredDate(day.date)}
                                onMouseLeave={() => setHoveredDate(null)}
                                onClick={() => handleDateClick(day.date)}
                                className={`h-9 w-full rounded-lg text-xs font-semibold transition-all flex items-center justify-center relative ${
                                  !day.isCurrentMonth ? 'text-theme-text-secondary/30 font-normal' : 'text-theme-text'
                                } ${
                                  day.disabled 
                                    ? 'text-theme-text-secondary/30 cursor-not-allowed line-through bg-transparent' 
                                    : 'cursor-pointer hover:bg-warm-beige/25 hover:text-theme-text'
                                } ${
                                  inRange ? 'bg-warm-beige/20 text-warm-beige font-bold' : ''
                                } ${
                                  selected 
                                    ? 'bg-warm-beige text-theme-bg font-bold shadow-[0_0_20px_rgba(214,194,168,0.65)] scale-105 z-10' 
                                    : ''
                                }`}
                              >
                                {day.date.getDate()}
                                
                                {/* Micro Indicators */}
                                {isCheckIn && (
                                  <span className="absolute bottom-[2px] w-1.5 h-1.5 bg-theme-bg rounded-full"></span>
                                )}
                                {isCheckOut && (
                                  <span className="absolute bottom-[2px] w-1.5 h-1.5 bg-theme-bg rounded-full"></span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                /* Success booking status card */
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-10 text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/40 to-transparent"></div>
                  
                  {/* Confirmed Glow and checkmark */}
                  <div className="mx-auto w-20 h-20 bg-warm-beige/10 rounded-full flex items-center justify-center mb-8 border border-warm-beige/20 shadow-[0_0_30px_rgba(214,194,168,0.2)]">
                    <CheckCircle2 size={40} className="text-warm-beige animate-pulse" />
                  </div>

                  <span className="text-xs uppercase tracking-widest text-warm-beige font-mono">Experience Reserved</span>
                  <h3 className="font-heading text-3xl text-theme-text mt-2 mb-6">Booking Details Confirmed</h3>

                  {/* Summary Card Details */}
                  <div className="glass p-6 rounded-2xl mb-8 text-left space-y-4 border border-glass-border">
                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-glass-border/60">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-theme-text/40 block">Check-in</span>
                        <span className="font-heading text-sm text-theme-text mt-1 block">{formatDateString(checkInDate)}</span>
                        <span className="text-xs text-theme-text/50">{checkInTime}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-theme-text/40 block">Check-out</span>
                        <span className="font-heading text-sm text-theme-text mt-1 block">{formatDateString(checkOutDate)}</span>
                        <span className="text-xs text-theme-text/50">{checkOutTime}</span>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-theme-text-secondary">Nights</span>
                      <span className="font-medium text-theme-text">{nights} {nights > 1 ? 'Nights' : 'Night'}</span>
                    </div>

                    <div className="flex justify-between text-sm pb-4 border-b border-glass-border/60">
                      <span className="text-theme-text-secondary">Guests</span>
                      <span className="font-medium text-theme-text">{guests} {guests > 1 ? 'Guests' : 'Guest'}</span>
                    </div>

                    <div className="flex justify-between items-baseline pt-2">
                      <span className="font-heading text-theme-text text-base">Total Charged</span>
                      <span className="font-heading text-warm-beige text-xl font-semibold">₹{total}</span>
                    </div>
                  </div>

                  <p className="text-xs text-theme-text-secondary mb-8 max-w-sm mx-auto leading-relaxed">
                    To guarantee your stay and confirm coordinates, please complete checkout on WhatsApp with our concierge.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="px-8 py-4 bg-warm-beige text-theme-bg font-medium tracking-widest text-xs uppercase rounded-xl hover:shadow-[0_0_30px_rgba(214,194,168,0.4)] transition-all duration-300"
                    >
                      Instant WhatsApp Checkout
                    </button>
                    <button
                      onClick={() => {
                        setCheckInDate(null);
                        setCheckOutDate(null);
                        setIsSuccess(false);
                      }}
                      className="px-8 py-4 border border-glass-border hover:bg-glass-white text-theme-text font-medium tracking-widest text-xs uppercase rounded-xl transition-all"
                    >
                      Book Another Date
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BookingSection;
