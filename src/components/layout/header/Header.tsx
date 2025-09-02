"use client"
import React, { useState, useEffect } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from 'next/link'
import { Phone, ShoppingBasket, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
                : 'bg-white shadow-sm'
        }`}>
            <nav className='container mx-auto px-4 py-3 lg:py-4'>
                <div className='flex items-center justify-between'>
                    {/* Logo and Restaurant Selector */}
                    <div className='flex items-center space-x-3 lg:space-x-4'>
                        <div className='flex items-center space-x-2'>
                            <svg
                                data-testid="logo"
                                width="70"
                                height="21"
                                className="lg:w-[90px] lg:h-[27px] transition-all duration-300 hover:scale-105"
                                viewBox="0 0 90 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="13.5" r="7.5" stroke="#F65F42" strokeWidth="7" />
                                <path
                                    d="M33.474 23.84V8.088H35.564L35.806 9.782C36.158 9.26867 36.642 8.814 37.258 8.418C37.874 8.022 38.666 7.824 39.634 7.824C40.69 7.824 41.6213 8.07333 42.428 8.572C43.2347 9.07067 43.8653 9.75267 44.32 10.618C44.7893 11.4833 45.024 12.466 45.024 13.566C45.024 14.666 44.7893 15.6487 44.32 16.514C43.8653 17.3647 43.2347 18.0393 42.428 18.538C41.6213 19.022 40.6827 19.264 39.612 19.264C38.7613 19.264 38.006 19.0953 37.346 18.758C36.7007 18.4207 36.1873 17.944 35.806 17.328V23.84H33.474ZM39.216 17.24C40.2133 17.24 41.0347 16.9027 41.68 16.228C42.3253 15.5387 42.648 14.644 42.648 13.544C42.648 12.8253 42.5013 12.1873 42.208 11.63C41.9147 11.0727 41.5113 10.64 40.998 10.332C40.4847 10.0093 39.8907 9.848 39.216 9.848C38.2187 9.848 37.3973 10.1927 36.752 10.882C36.1213 11.5713 35.806 12.4587 35.806 13.544C35.806 14.644 36.1213 15.5387 36.752 16.228C37.3973 16.9027 38.2187 17.24 39.216 17.24ZM48.8663 6.02C48.4263 6.02 48.0596 5.888 47.7663 5.624C47.4876 5.34533 47.3483 5.00067 47.3483 4.59C47.3483 4.17933 47.4876 3.842 47.7663 3.578C48.0596 3.29933 48.4263 3.16 48.8663 3.16C49.3063 3.16 49.6656 3.29933 49.9443 3.578C50.2376 3.842 50.3843 4.17933 50.3843 4.59C50.3843 5.00067 50.2376 5.34533 49.9443 5.624C49.6656 5.888 49.3063 6.02 48.8663 6.02ZM47.7003 19V8.088H50.0323V19H47.7003ZM52.3847 19V17.108L58.2147 10.024H52.4727V8.088H60.8547V9.98L54.9807 17.064H60.9647V19H52.3847ZM62.6328 19V17.108L68.4628 10.024H62.7208V8.088H71.1028V9.98L65.2288 17.064H71.2128V19H62.6328ZM77.3028 19.264C76.3788 19.264 75.6161 19.11 75.0148 18.802C74.4135 18.494 73.9661 18.0907 73.6728 17.592C73.3795 17.0787 73.2328 16.5213 73.2328 15.92C73.2328 14.864 73.6435 14.028 74.4648 13.412C75.2861 12.796 76.4595 12.488 77.9848 12.488H80.8448V12.29C80.8448 11.4393 80.6101 10.8013 80.1408 10.376C79.6861 9.95067 79.0921 9.738 78.3588 9.738C77.7135 9.738 77.1488 9.89933 76.6648 10.222C76.1955 10.53 75.9095 10.992 75.8068 11.608H73.4748C73.5481 10.816 73.8121 10.1413 74.2668 9.584C74.7361 9.012 75.3228 8.57933 76.0268 8.286C76.7455 7.978 77.5301 7.824 78.3808 7.824C79.9061 7.824 81.0868 8.22733 81.9228 9.034C82.7588 9.826 83.1768 10.9113 83.1768 12.29V19H81.1528L80.9548 17.13C80.6468 17.7313 80.1995 18.2373 79.6128 18.648C79.0261 19.0587 78.2561 19.264 77.3028 19.264ZM77.7648 17.372C78.3955 17.372 78.9235 17.2253 79.3488 16.932C79.7888 16.624 80.1261 16.2207 80.3608 15.722C80.6101 15.2233 80.7641 14.6733 80.8228 14.072H78.2268C77.3028 14.072 76.6428 14.2333 76.2468 14.556C75.8655 14.8787 75.6748 15.282 75.6748 15.766C75.6748 16.2647 75.8581 16.6607 76.2248 16.954C76.6061 17.2327 77.1195 17.372 77.7648 17.372Z"
                                    fill="#484848"
                                />
                            </svg>
                        </div>
                        <div className='hidden sm:block'>
                            <Select>
                                <SelectTrigger className="w-[120px] sm:w-[150px] lg:w-[180px] text-xs lg:text-sm border-gray-200 hover:border-primary/50 transition-colors focus:ring-2 focus:ring-primary/20">
                                    <SelectValue placeholder="Select Restaurant" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="cheesy-delight">Cheesy Delight</SelectItem>
                                    <SelectItem value="pizza-paradise">Pizza Paradise</SelectItem>
                                    <SelectItem value="pizza-cornor">Pizza Hut</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden lg:flex items-center space-x-6'>
                        <ul className='flex items-center font-medium space-x-8'>
                            <li>
                                <Link 
                                    href={"/"} 
                                    className='relative text-gray-700 hover:text-primary transition-all duration-300 group'
                                >
                                    Menu
                                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href={"/"} 
                                    className='relative text-gray-700 hover:text-primary transition-all duration-300 group'
                                >
                                    Orders
                                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
                                </Link>
                            </li>
                        </ul>
                        
                        <div className='flex items-center space-x-4'>
                            <div className='relative group'>
                                <Link href={"/"} className='p-2 rounded-full hover:bg-gray-100 transition-all duration-300'>
                                    <ShoppingBasket className='w-5 h-5 text-gray-700 group-hover:text-primary transition-colors duration-300'/>
                                </Link>
                                <span className="absolute top-0 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 font-bold text-white text-xs shadow-lg animate-pulse">
                                    3
                                </span>
                            </div>
                            
                            <div className="flex items-center space-x-2 px-3 py-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                                <Phone className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-gray-700">+91 9800 098 998</span>
                            </div>
                            
                            <Button 
                                size="sm" 
                                className='bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105'
                            >
                                Logout
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className='flex lg:hidden items-center space-x-3'>
                        <div className='relative group'>
                            <Link href={"/"} className='p-2 rounded-full hover:bg-gray-100 transition-all duration-300'>
                                <ShoppingBasket className='w-5 h-5 text-gray-700 group-hover:text-primary transition-colors duration-300'/>
                            </Link>
                            <span className="absolute top-2 -right-1 h-4 w-4 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 font-bold text-white text-xs shadow-lg animate-pulse">
                                3
                            </span>
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 group"
                        >
                            <div className='relative w-6 h-6'>
                                <Menu 
                                    size={24} 
                                    className={`absolute inset-0 transition-all duration-300 ${
                                        isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                                    }`} 
                                />
                                <X 
                                    size={24} 
                                    className={`absolute inset-0 transition-all duration-300 ${
                                        isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                                    }`} 
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div className='pt-4 pb-4 border-t border-gray-200 mt-4'>
                        <div className='space-y-4'>
                            <ul className='space-y-2'>
                                <li>
                                    <Link 
                                        href={"/"} 
                                        className='block py-3 px-4 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-300 font-medium'
                                    >
                                        Menu
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href={"/"} 
                                        className='block py-3 px-4 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-300 font-medium'
                                    >
                                        Orders
                                    </Link>
                                </li>
                            </ul>
                            
                            <div className="flex items-center space-x-3 py-3 px-4 rounded-lg bg-gray-50">
                                <Phone className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-gray-700">+91 9800 098 998</span>
                            </div>
                            
                            <div className='px-4'>
                                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg">
                                    Logout
                                </Button>
                            </div>
                            
                            <div className='px-4 sm:hidden'>
                                <Select>
                                    <SelectTrigger className="w-full text-sm border-gray-200">
                                        <SelectValue placeholder="Select Restaurant" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="cheesy-delight">Cheesy Delight</SelectItem>
                                        <SelectItem value="pizza-paradise">Pizza Paradise</SelectItem>
                                        <SelectItem value="pizza-cornor">Pizza Hut</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
