import { Macondo } from '@next/font/google';
import { Livvic } from '@next/font/google';
import { Itim } from '@next/font/google';



export const macondo = Macondo({
    weight: '400', // specify weight if needed; Macondo only has 400 available
    subsets: ['latin'], // specify subset if needed
    display: 'swap', // controls how the font displays (swap, fallback, etc.)
  });


export const livvic = Livvic({
    subsets: ['latin'],
    weight: '400', // Adjust weight as needed, like '300', '500', etc.
    style: 'normal' // Optional: can be 'italic' if needed
});


// for Best selling section

export const itimFont = Itim({
  subsets: ['latin'], // aap yahan apne required subsets specify kar sakte hain
  weight: '400', // optional: agar specific weight chahiye, otherwise default rakh sakte hain
  style: 'normal', // optional: agar normal ya italic ka selection karna ho
  display: 'swap', // 'swap' ka mtlb hai ke font load hotay waqt temporary system font dikhaye ga
});