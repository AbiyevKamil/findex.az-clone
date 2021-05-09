import React from "react";
import * as Components from "../styled-components/FAQComponents";

const FAQ = () => { 
  return (
    <Components.Container>
      <Components.ContainerTop>
        <div>
          <h1>
            Salam, <b>Hörmətli Müştəri.</b>
          </h1>
          <h1>Sizə necə kömək edə bilərəm?</h1>
        </div>
      </Components.ContainerTop>
      <Components.ContainerBottom>
        <div className="left">
          <button className="active" href="https">Sifariş neçə günə çatdırılır?</button>
          <button href="https">
            Geri qaytarma xidmətinin ("İade") qaydaları necədir?
          </button>
          <button href="https">
            Bakı anbarında bağlamaların saxlanma müddəti nə qədərdir?
          </button>
          <button href="https">Necə sifariş edə bilərəm?</button>
          <button href="https">Sifarişim sistemdə qeyd edilməyibsə, nə etməliyəm?</button>
          <button href="https">Bəyənnamə nədir? Necə doldurulur?</button>
          <button href="https">Daşınması qadağan olan məhsullar hansılardır?</button>
          <button href="https">300 dollar limiti nədir?</button>
          <button href="https">Bağlamam gömrükdə saxlandıqda nə etməliyəm?</button>
          <button href="https">Balansımdakı məbləği necə istifadə edə bilərəm?</button>
          <button href="https">Çatdırılma məbləği necə hesablanır?</button>
          <button href="https">Bağlamanın çatdırılma haqqını necə ödəmək olar?</button>
          <button href="https">
            Başqa bir şəxs sizin bağlamanı necə təhvil ala bilər?
          </button>
          <button href="https">Necə kuryer sifariş edə bilərəm?</button>
          <button href="https">Kuryer qiyməti hər bağlama üçün ayrı hesablanır?</button>
          <button href="https">Findex saytındakı balansımı necə artıra bilərəm?</button>
          <button href="https">Bağlamalar birləşdirilir?</button>
          <button href="https">Cari ay limitimi necə izləyə bilərəm?</button>
        </div>
        <div className="right">
          <p>
            Bağlama Türkiyə anbarımıza daxil olduqdan sonra 3-5 iş günü ərzində
            Azərbaycana çatdırılır. Türkiyədən yüklərin göndərişi həftədə 2 dəfə
            həyata keçirilir.
          </p>
          <p>
            • Xarici anbarımıza daxil olmuş bağlama xarici anbarımızdan birbaşa
            mağazaya iade edilmir.
          </p>
        </div>
      </Components.ContainerBottom>
    </Components.Container>
  );
};

export default FAQ;
