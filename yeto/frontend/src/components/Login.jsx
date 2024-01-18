const Login = () => {
    return (
      <div className="account-column">
        <h2>Giriş Yap</h2>
        <form>
          <div>
            <label>
              <span>
                Kullanıcı Adı veya E-mail adres <span className="required">*</span>
              </span>
              <input type="text" />
            </label>
          </div>
          <div>
            <label>
              <span>
                Şifre <span className="required">*</span>
              </span>
              <input type="password" />
            </label>
          </div>
          <p className="remember">
            <label>
              <input type="checkbox" />
              <span>Giriş Bilgilerimi Hatırla</span>
            </label>
            <button className="btn btn-sm">Giriş</button>
          </p>
          <a href="#" className="form-link">
            Şifreni mi unuttun ?
          </a>
        </form>
      </div>
    );
  };
  
  export default Login;