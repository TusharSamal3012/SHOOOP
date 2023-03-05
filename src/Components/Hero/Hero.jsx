import React from 'react'
// import { BsChatRight } from 'react-icons/bs'
import css from '../Hero/Hero.module.css'
import HeroImg from '../../assets/hero.png'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Hero = () => {

    const transition = { duration: 3, type: "spring" }

    return (
        <div className={css.container}>
            <div className={css.h_sides}>
                <span className={css.text1}>
                    skin protection cream
                </span>
                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</span>
                </div>
            </div>

            <div className={css.wrapper}>
                <motion.div
                    initial={{ bottom: '3rem' }}
                    whileInView={{ bottom: '0rem' }}
                    className={css.blueCircle}
                    transition={transition}>
                </motion.div>
                <motion.img
                    transition={transition}
                    initial={{ bottom: '-3rem' }}
                    whileInView={{ bottom: '0rem' }}
                    src={HeroImg} alt="" width={600} />
                <motion.div
                    transition={transition}
                    initial={{ left: "70%" }}
                    whileInView={{ left: "80%" }}
                    className={css.cart2}>
                    <RiShoppingBagFill className={css.arrow} />

                    <div className={css.signup}>
                        <span>Best Signup offers</span>
                        <div>
                            <BsArrowRight className={css.arrow} />
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>

                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    )
}

export default Hero