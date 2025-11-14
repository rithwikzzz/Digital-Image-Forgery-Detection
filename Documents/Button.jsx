import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Button = ({ children, to, href, variant = 'primary', className = '', onClick, icon: Icon }) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900'
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 glow',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-white focus:ring-slate-500 border border-slate-700',
    outline: 'bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 focus:ring-blue-500'
  }

  const Component = motion.button
  const content = (
    <>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return (
    <Component
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {content}
    </Component>
  )
}

export default Button
