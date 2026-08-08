import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';

function Contact() {
  const [firstname, setFirstname] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
  e.preventDefault();

  if (!mail.includes("@.com")) {
  setError("Email invalide");
  return;
}
  if (!firstname || !mail || !message) {
    setError("Tous les champs sont obligatoires");
    return;
  }
  setError('');
  alert("Formulaire envoyé !");
};
 
  return (
    <>
     <div
        className='bg-gray-300/10 py-10'
      >
        <div className='flex  justify-center gap-30 mt-20'>
          <div className='flex justify-center flex-col items-center gap-2'>
            <h1 className='text-4xl font-extrabold'>Contact <span className='text-4xl'>Me</span></h1>
            <div className='mt-5'>
              <div className='flex items-center gap-1'>
                <Mail size={15}/>
                <p>John@....com</p>
              </div>
              <div className='flex items-center '>
                <Phone size={15}/>
                <p>+221 0000000</p>
              </div>
            </div>
          </div>  

          <div className='gap-2 flex flex-col'>
            <div className="">
              <input type='text' placeholder='Entrez votre nom' name='firstname' value={firstname} 
              onChange= {(e) => setFirstname(e.target.value)} className='border border-black px-20 py-3 rounded-lg  ' />
            </div>

            <div className="">
              <input type='text' placeholder='Entrez votre mail' name='mail' value={mail} 
              onChange= {(e) => setMail(e.target.value)} className='border border-black px-20 py-3 rounded-lg '/>
            </div>

            <div className="">
              <textarea name='message' placeholder='Message' value={message} 
              onChange= {(e) => setMessage(e.target.value)} className='border border-black px-22 py-10 rounded-lg '/>
            </div>
            <button onClick={handleSubmit} className='border border-none px-20 py-2 rounded-lg text-md font-bold bg-[linear-gradient(130deg,gray,pink)] '>Submit</button>
            <div>
              {error && (
                <p className="text-red-500">
                {error}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;