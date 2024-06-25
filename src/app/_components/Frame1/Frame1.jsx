import React from 'react'
import "./Frame1.css"

const Frame1 = () => {
    return (
        <main className='flex flex-col justify-center items-center gap-10 bg-white md:w-[600px] lg:w-[900px] w-[360px] px-4 py-8 rounded-lg'>
            <div className='flex justify-center items-center gap-4'>
                <svg className='hidden lg:inline-block' width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9999 0.333252C7.79992 0.333252 0.333252 7.79992 0.333252 16.9999C0.333252 26.1999 7.79992 33.6666 16.9999 33.6666C26.1999 33.6666 33.6666 26.1999 33.6666 16.9999C33.6666 7.79992 26.1999 0.333252 16.9999 0.333252ZM23.6666 18.6666H18.6666V23.6666C18.6666 24.5833 17.9166 25.3333 16.9999 25.3333C16.0833 25.3333 15.3333 24.5833 15.3333 23.6666V18.6666H10.3333C9.41659 18.6666 8.66659 17.9166 8.66659 16.9999C8.66659 16.0833 9.41659 15.3333 10.3333 15.3333H15.3333V10.3333C15.3333 9.41659 16.0833 8.66659 16.9999 8.66659C17.9166 8.66659 18.6666 9.41659 18.6666 10.3333V15.3333H23.6666C24.5833 15.3333 25.3333 16.0833 25.3333 16.9999C25.3333 17.9166 24.5833 18.6666 23.6666 18.6666Z" fill="#0096C8" />
                </svg>
                <svg className='inline-block lg:hidden' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 0.666748C6.64002 0.666748 0.666687 6.64008 0.666687 14.0001C0.666687 21.3601 6.64002 27.3334 14 27.3334C21.36 27.3334 27.3334 21.3601 27.3334 14.0001C27.3334 6.64008 21.36 0.666748 14 0.666748ZM19.3334 15.3334H15.3334V19.3334C15.3334 20.0667 14.7334 20.6667 14 20.6667C13.2667 20.6667 12.6667 20.0667 12.6667 19.3334V15.3334H8.66669C7.93335 15.3334 7.33335 14.7334 7.33335 14.0001C7.33335 13.2667 7.93335 12.6667 8.66669 12.6667H12.6667V8.66675C12.6667 7.93342 13.2667 7.33342 14 7.33342C14.7334 7.33342 15.3334 7.93342 15.3334 8.66675V12.6667H19.3334C20.0667 12.6667 20.6667 13.2667 20.6667 14.0001C20.6667 14.7334 20.0667 15.3334 19.3334 15.3334Z" fill="#0096C8" />
                </svg>
                <p className='text-[16px] lg:text-[20px] font-semibold'>Add Your Listing</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div id="f1-c1" className='frame1card w-[312px] h-[142px] lg:w-[360px] lg:h-[175px] flex flex-col py-3 px-4 border-hobby-purple rounded-[8px]'>
                    <div className='flex items-center justify-start gap-2 mt-2'>
                        <svg className='icon' width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 11.25C22.7167 11.25 25.1167 11.9 27.0667 12.75C28.8667 13.55 30 15.35 30 17.3V20H10V17.3167C10 15.35 11.1333 13.55 12.9333 12.7667C14.8833 11.9 17.2833 11.25 20 11.25ZM6.66667 11.6667C8.5 11.6667 10 10.1667 10 8.33333C10 6.5 8.5 5 6.66667 5C4.83333 5 3.33333 6.5 3.33333 8.33333C3.33333 10.1667 4.83333 11.6667 6.66667 11.6667ZM8.55 13.5C7.93333 13.4 7.31667 13.3333 6.66667 13.3333C5.01667 13.3333 3.45 13.6833 2.03333 14.3C0.8 14.8333 0 16.0333 0 17.3833V20H7.5V17.3167C7.5 15.9333 7.88333 14.6333 8.55 13.5ZM33.3333 11.6667C35.1667 11.6667 36.6667 10.1667 36.6667 8.33333C36.6667 6.5 35.1667 5 33.3333 5C31.5 5 30 6.5 30 8.33333C30 10.1667 31.5 11.6667 33.3333 11.6667ZM40 17.3833C40 16.0333 39.2 14.8333 37.9667 14.3C36.55 13.6833 34.9833 13.3333 33.3333 13.3333C32.6833 13.3333 32.0667 13.4 31.45 13.5C32.1167 14.6333 32.5 15.9333 32.5 17.3167V20H40V17.3833ZM20 0C22.7667 0 25 2.23333 25 5C25 7.76667 22.7667 10 20 10C17.2333 10 15 7.76667 15 5C15 2.23333 17.2333 0 20 0Z" fill="#8064A2" />
                        </svg>
                        <span className='font-semibold text-9 md:text-[20px]'>People</span>
                    </div>
                    <p className='text-[12px] ml-1 lg:text-[14px] font-normal mt-4'>
                        An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association.
                    </p>
                </div>
                <div id="f1-c2" className='frame1card w-[312px] h-[142px] lg:w-[360px] lg:h-[175px] flex flex-col py-3 px-4 border-hobby-green rounded-[8px]'>
                    <div className='flex items-center justify-start gap-2 mt-2'>
                        <svg className='icon' width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0002 0.333252C5.55016 0.333252 0.333496 5.54992 0.333496 11.9999C0.333496 20.7499 12.0002 33.6666 12.0002 33.6666C12.0002 33.6666 23.6668 20.7499 23.6668 11.9999C23.6668 5.54992 18.4502 0.333252 12.0002 0.333252ZM12.0002 16.1666C9.70016 16.1666 7.8335 14.2999 7.8335 11.9999C7.8335 9.69992 9.70016 7.83325 12.0002 7.83325C14.3002 7.83325 16.1668 9.69992 16.1668 11.9999C16.1668 14.2999 14.3002 16.1666 12.0002 16.1666Z" fill="#77933C" />
                        </svg>
                        <span className='font-semibold text-9 md:text-[20px]'>Place</span>
                    </div>
                    <p className='text-[12px] ml-1 lg:text-[14px] font-normal mt-4'>
                        An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.
                    </p>
                </div>
                <div id="f1-c3" className='frame1card w-[312px] h-[142px] lg:w-[360px] lg:h-[175px] flex flex-col py-3 px-4 border-hobby-red rounded-[8px]'>
                    <div className='flex items-center justify-start gap-2 mt-2'>
                        <svg className='icon' width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.5333 9.08317V9.29984L31.0999 18.2998C30.8124 19.3681 30.1786 20.3107 29.298 20.9803C28.4173 21.6498 27.3395 22.0084 26.2333 21.9998H13.4833C12.2316 22.0049 11.0235 21.5403 10.0978 20.6979C9.17204 19.8555 8.59593 18.6964 8.48328 17.4498L7.39995 5.18317C7.3624 4.76763 7.17037 4.38129 6.86178 4.10048C6.5532 3.81967 6.15051 3.66481 5.73328 3.6665H2.11662C1.67459 3.6665 1.25067 3.49091 0.938106 3.17835C0.625546 2.86579 0.449951 2.44186 0.449951 1.99984C0.449951 1.55781 0.625546 1.13389 0.938106 0.821326C1.25067 0.508766 1.67459 0.333171 2.11662 0.333171H5.73328C6.98496 0.328092 8.19302 0.792666 9.11878 1.6351C10.0445 2.47754 10.6206 3.63656 10.7333 4.88317V5.33317H30.2166C30.6917 5.32944 31.1622 5.42733 31.5964 5.62027C32.0305 5.81321 32.4185 6.09674 32.7341 6.45186C33.0498 6.80697 33.2859 7.22547 33.4266 7.67929C33.5673 8.13311 33.6094 8.61177 33.5499 9.08317H33.5333Z" fill="#C0504D" />
                        </svg>
                        <span className='font-semibold text-9 md:text-[20px]'>Product</span>
                    </div>
                    <p className='text-[12px] ml-1 lg:text-[14px] font-normal mt-4'>
                        An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit.
                    </p>
                </div>
                <div id="f1-c4" className='frame1card w-[312px] h-[142px] lg:w-[360px] lg:h-[175px] flex flex-col py-3 px-4 border-hobby-blue rounded-[8px]'>
                    <div className='flex items-center justify-start gap-2 mt-2'>
                        <svg className='icon' width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.6667 16.5498C21.1833 16.0665 20.3833 16.0665 19.9 16.5498L12.65 23.7998L10 21.1498C9.51667 20.6665 8.71667 20.6665 8.23333 21.1498C7.75 21.6332 7.75 22.4332 8.23333 22.9165L11.4667 26.1498C12.1167 26.7998 13.1667 26.7998 13.8167 26.1498L21.65 18.3165C22.15 17.8332 22.15 17.0332 21.6667 16.5498ZM26.6667 3.99984H25V2.33317C25 1.4165 24.25 0.666504 23.3333 0.666504C22.4167 0.666504 21.6667 1.4165 21.6667 2.33317V3.99984H8.33333V2.33317C8.33333 1.4165 7.58333 0.666504 6.66667 0.666504C5.75 0.666504 5 1.4165 5 2.33317V3.99984H3.33333C1.48333 3.99984 0.0166667 5.49984 0.0166667 7.33317L0 30.6665C0 32.4998 1.48333 33.9998 3.33333 33.9998H26.6667C28.5 33.9998 30 32.4998 30 30.6665V7.33317C30 5.49984 28.5 3.99984 26.6667 3.99984ZM25 30.6665H5C4.08333 30.6665 3.33333 29.9165 3.33333 28.9998V12.3332H26.6667V28.9998C26.6667 29.9165 25.9167 30.6665 25 30.6665Z" fill="#0096C8" />
                        </svg>
                        <span className='font-semibold text-9 md:text-[20px]'>Program</span>
                    </div>
                    <p className='text-[12px] ml-1 lg:text-[14px] font-normal mt-4'>
                        An Event with Venue and Date.  Meetup, Workshop or Webinar.  Exhibition, Performance or Competition.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Frame1