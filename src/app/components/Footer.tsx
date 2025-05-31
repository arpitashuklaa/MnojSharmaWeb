'use client'
import { motion } from 'framer-motion';
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi';
import Link from "next/link"
import React from "react"

const Footer = () => {
    const socialLinks = [
        { icon: FiInstagram, href: "#", label: "Instagram" },
        { icon: FiTwitter, href: "#", label: "Twitter" },
        { icon: FiFacebook, href: "#", label: "Facebook" },
        { icon: FiLinkedin, href: "#", label: "LinkedIn" },
    ];

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-[var(--saffron-darker)] to-[var(--saffron-dark)] text-white py-16"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold mb-4">About</h3>
                        <p className="text-[var(--saffron-light)]">
                            Manoj Kumar Sharma is a renowned author whose works have inspired millions
                            around the world. Join us on this journey of wisdom and enlightenment.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-[var(--saffron-light)] hover:text-white transition-colors duration-300">
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-[var(--saffron-light)] hover:text-white transition-colors duration-300">
                                    Books
                                </Link>
                            </li>
                            <li>
                                <Link href="/testimonials" className="text-[var(--saffron-light)] hover:text-white transition-colors duration-300">
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-[var(--saffron-light)] hover:text-white transition-colors duration-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
                        <div className="flex space-x-6">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-2xl text-[var(--saffron-light)] hover:text-white transition-colors duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 pt-8 border-t border-[var(--saffron-light)]/20 text-center"
                >
                    <p className="text-[var(--saffron-light)]">
                        © {new Date().getFullYear()} Manoj Kumar Sharma. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    )
}

export default Footer