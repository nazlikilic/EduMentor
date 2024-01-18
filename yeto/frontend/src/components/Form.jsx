// Form.jsx
import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [answer1, setAnswer1] = useState(null);
  const [answer2, setAnswer2] = useState(null);
  const [answer3, setAnswer3] = useState(null);
  const [answer4, setAnswer4] = useState(null);
  const [answer5, setAnswer5] = useState(null);
  const [answer6, setAnswer6] = useState(null);
  const [answer7, setAnswer7] = useState(null);
  const [answer8, setAnswer8] = useState(null);
  const [answer9, setAnswer9] = useState(null);
  const [answer10, setAnswer10] = useState(null);
  const [answer11, setAnswer11] = useState(null);
  const [answer12, setAnswer12] = useState(null);
  const [answer13, setAnswer13] = useState(null);
  const [answer14, setAnswer14] = useState(null);
  const [answer15, setAnswer15] = useState(null);
  const [answer16, setAnswer16] = useState(null);
  const [answer17, setAnswer17] = useState(null);
  const [answer18, setAnswer18] = useState(null);
  const [answer19, setAnswer19] = useState(null);
  const [answer20, setAnswer20] = useState(null);
  

  // Diğer sorular için de state'leri buraya ekleyebilirsiniz.

  return (
    <section className="form">
      <h1>Yazılım Alanını Keşfet:</h1>
      <hr />
      <form>
        <div className="radio">
          <p>1.Bir web sitesinin nasıl yapılabileceğiyle ilgili düşünürüm.</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer1 === "evet"}
              onChange={() => setAnswer1("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer1 === "hayir"}
              onChange={() => setAnswer1("hayir")}
            />
            Hayır
          </label>
        </div>

        <div className="radio">
          <p>2.Güzel tasarlanmış ön yüzlü bir web sitesi ziyaret ettiğimde nasıl yapılmış olabileceği ilgimi çeker.</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer2 === "evet"}
              onChange={() => setAnswer2("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer2 === "hayir"}
              onChange={() => setAnswer2("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>3.Hayalini kurduğum bir web sitesi projem var.</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer3 === "evet"}
              onChange={() => setAnswer3("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer3 === "hayir"}
              onChange={() => setAnswer3("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>4.Web programlama yapabilmek için baştan sona bir yazılım dilini öğrenmek hoşuma gidebilir.</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer4 === "evet"}
              onChange={() => setAnswer4("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer4 === "hayir"}
              onChange={() => setAnswer4("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>5.Bir web sitesi ziyaretimde işleyişin arka tarafta nasıl olabileceğiyle ilgili meraklanırım.</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer5 === "evet"}
              onChange={() => setAnswer5("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer5 === "hayir"}
              onChange={() => setAnswer5("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>6.Bir Mobil uygulamanın nasıl yapılabileceğiyle ilgili düşünürüm.</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer6 === "evet"}
              onChange={() => setAnswer6("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer6 === "hayir"}
              onChange={() => setAnswer6("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>7.Bir Mobil uygulamanın önyüz tasarımını yapıyor olmak hoşuma gider.</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer7 === "evet"}
              onChange={() => setAnswer7("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer7 === "hayir"}
              onChange={() => setAnswer7("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>8.Hayalini kurduğum bir mobil uygulama projem var.</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer8 === "evet"}
              onChange={() => setAnswer8("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer8 === "hayir"}
              onChange={() => setAnswer8("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>9Bir mobil uygulama yapabilmek için bir yazılım dilini ve bir teknolojiyi baştan sona öğrenmek hoşuma gider.</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer8 === "evet"}
              onChange={() => setAnswer8("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer8 === "hayir"}
              onChange={() => setAnswer8("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>10.Daha önce mobil uygulama alanında bir proje yapma girişimim oldu.</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer10 === "evet"}
              onChange={() => setAnswer10("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer10 === "hayir"}
              onChange={() => setAnswer10("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>11.Daha önce bir oyun geliştirme girişimim oldu.</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer11 === "evet"}
              onChange={() => setAnswer11("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer11 === "hayir"}
              onChange={() => setAnswer11("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>12.Oyunlarla İlgili Teknolojik Gelişmeleri ve Trendleri Takip Ediyor musunuz?</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer12 === "evet"}
              onChange={() => setAnswer12("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer12 === "hayir"}
              onChange={() => setAnswer12("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>13.Bir Oyun Motoru -Unity, Unreal vb.- Kullanma Deneyiminiz Var mı?</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer13 === "evet"}
              onChange={() => setAnswer13("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer13 === "hayir"}
              onChange={() => setAnswer13("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>14.Oyun Geliştirme Araçları ve Dilleri Hakkında Temel Bilgiye Sahip misiniz?</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer14 === "evet"}
              onChange={() => setAnswer14("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer14 === "hayir"}
              onChange={() => setAnswer14("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>15.Kafamda hayata geçirmek istediğim bir oyun projem var.</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer15 === "evet"}
              onChange={() => setAnswer15("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer15 === "hayir"}
              onChange={() => setAnswer15("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>16.İstatistik ve Matematik Konularına Olan Hakimiyetiniz Var mı?</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer16 === "evet"}
              onChange={() => setAnswer16("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer16 === "hayir"}
              onChange={() => setAnswer16("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>17.Veri Bilimi ve Analitik Alanındaki Gelişmeleri ve Trendleri Takip Ediyor musunuz?</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer17 === "evet"}
              onChange={() => setAnswer17("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer17 === "hayir"}
              onChange={() => setAnswer17("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>18.Veri Bilimi veya Veri Analitiği Deneyiminiz Var mı?</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer18 === "evet"}
              onChange={() => setAnswer18("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer18 === "hayir"}
              onChange={() => setAnswer18("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>19.Şu Anda Veri Bilimi Projeleri Üzerinde Çalışmak İster misiniz?</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer19 === "evet"}
              onChange={() => setAnswer19("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer19 === "hayir"}
              onChange={() => setAnswer19("hayir")}
            />
            Hayır
          </label>
        </div>
        <div className="radio">
          <p>20.Bir Veri Bilimi Araç veya Dilini -Python, R, vb.- Kullanma Deneyiminiz Var mı?</p>
          <label>
            <input
              type="radio"
              value="evet"
              checked={answer20 === "evet"}
              onChange={() => setAnswer20("evet")}
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              value="hayir"
              checked={answer20 === "hayir"}
              onChange={() => setAnswer20("hayir")}
            />
            Hayır
          </label>
        </div>

        <button>Bitti</button>
      </form>

      
    </section>
  );
};

export default Form;
