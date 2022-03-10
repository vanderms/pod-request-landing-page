import { useState, useRef } from 'react';



enum Message {
  Empty = '',
  Error = 'Oops! Please check your email',
  Success = 'Thanks...',
}

export default function Form() {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<Message>(Message.Empty);

  function handleSubmit(e: any) {
    e.preventDefault();
    setMessage(Message.Success);
    setEmail('');
  }

  const messageClassName = {
    [Message.Empty]: 'message hidden',
    [Message.Error]: 'message error',
    [Message.Success]: 'message success',
  }[message];

  return (
    <form action="/" className="form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="email"
          name="inputEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onInvalid={(event) => {
            event.preventDefault();
            setMessage(Message.Error);
          }}
          className="input-email"
          id="section-hero-email-input"
          placeholder="  "
          required
        />
        <label className="label-email" htmlFor="section-hero-email-input">
          Email Address
        </label>
        <div data-testid="custom-message" className={messageClassName}>
          {message}
        </div>
      </div>
      <input className="input-submit" type="submit" value="Request Access" />
    </form>
  );
}
