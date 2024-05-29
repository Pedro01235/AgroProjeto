import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <main className="contact">
      <h2>Contato</h2>
      <p>Entre em contato conosco para mais informações sobre agricultura sustentável.</p>
      <form>
        <label>
          Nome:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Mensagem:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default ContactPage;
