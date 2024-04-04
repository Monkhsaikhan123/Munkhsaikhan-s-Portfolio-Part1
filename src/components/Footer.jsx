import React from 'react'
import image from '../../public/portolio.png'


const Footer = () => {
  return (
    <section>
       <footer className='w-full h-[150px] bg-gray-100 flex justify-center items-center'>
        <div className='w-4/5 bg-red-200 h-full flex justify-center items-center'>
            <div className='w-full h-full flex justify-center items-center bg-white'>
                <div className='w-1/3 h-full  flex justify-center items-center'>
                      <h1 className="btn btn-ghost text-xl font-serif">Munkhsaikhan Portfolio Web</h1>
                </div>
                <ul className='flex flex-col w-1/3 h-full justify-around gap-5 '>
                      <div className='w-full h-2/3 flex  justify-around items-center'>
                          <li>
                              <a href='#about' className='font-serif text-xl'>#About</a>
                          </li>

                          <li>
                              <a href='#portfolio' className='font-serif text-xl'>#Portfolio</a>
                          </li>

                          <li>
                              <a href='#skills' className='font-serif text-xl'>#Skills</a>
                          </li>
                      </div>
                      <div className='w-full h-1/3 '>
                          <div className='flex w-full justify-evenly items-center'>
                              <a href='https://www.instagram.com/munkhsaikhanbaatar/' className='footer_social-link' target='_blank'>
                                  <i className='uil uil-instagram text-3xl text-primary'></i>
                              </a>
                              <a href='https://github.com/Monkhsaikhan123' className='footer_social-link' target='_blank'>
                                  <i className='uil uil-github-alt text-3xl text-primary'></i>
                              </a>
                              <a href='https://www.youtube.com/channel/UC8q0wRYxNCD_44j-H8rlbWQ' className='footer_social-link' target='_blank'>
                                  <i className='uil uil-youtube text-3xl text-primary'></i>
                              </a>
                          </div>
                      </div>
                </ul>

                <div className='w-1/3 flex-col flex justify-center items-center'>
                   <span className='text-gray-400'>
                        Thank you for visiting my Portfolio
                   </span>
                   <span className='text-gray-400'>
                       © 2024
                   </span>
                </div>

                

            </div>
        </div>
            
        </footer>
    </section>
  )
}

export default Footer