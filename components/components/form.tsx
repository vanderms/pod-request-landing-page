export default function Form() {
  return (
    <form action="/" className="form">
      <div className="input-container">
        <input
          type="email"
          className="input-email"
          id="section-hero-email-input"
          placeholder="  "
          required
        />
        <label className="label-email" htmlFor="section-hero-email-input">
          Email Address
        </label>
        <div className="message hidden">Oops! Please check your email</div>
      </div>
      <input className="input-submit" type="submit" value="Request Access" />
    </form>
  );
}
