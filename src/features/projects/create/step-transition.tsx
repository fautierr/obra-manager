'use client'
import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface StepTransitionProps {
  children: ReactNode
  stepKey: string // importante para que AnimatePresence detecte el cambio
}

export const StepTransition = ({ children, stepKey }: StepTransitionProps) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={stepKey} // cuando cambia, dispara la animación
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className='w-full'
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
