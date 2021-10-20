
import './hakkımızda.css';
import React from 'react';
import GavelIcon from '@material-ui/icons/Gavel';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PhoneIcon from '@material-ui/icons/Phone';


function Hakkimizda() {
    return (
        
        <div class="row" style={{justify: "center",margin:"auto"}}>
            
           <div>
               <AccessTimeIcon/> 
           </div>
            
            <div className="hakkımızda" style={{}}>
                <h3 style={{textAlign:"center",color:"#4682B4"}}></h3>
                <p className="hak" >
                
                Avrupa İnsan Hakları Mahkemesi (AİHM), uluslararası bir teşkilat olan Avrupa Konseyi'ne bağlı olarak 1959 yılında kurulmuş uluslararası bir mahkemedir. Mahkeme, Avrupa İnsan Hakları Sözleşmesi ve ek protokolleriyle güvence altına alınmış olan temel hakların çiğnenmesi durumunda bireylerin, toplulukların, tüzel kişilerin ve diğer devletlerin, belirli usul ve kurallar dahilinde başvurabileceği bir yargı merciidir. 47 Avrupa Konseyi üyesi, Avrupa İnsan Hakları Mahkemesi'nin yargı yetkisini tanımaktadır. Mahkeme, Fransa'nın Strasbourg şehrinde bulunmaktadır.

                Avrupa Birliği'nin günümüzde Avrupa Konseyi'ne ait bayrağı kullanıyor olması çeşitli kafa karışıklıklarına yol açıyorsa da, Avrupa İnsan Hakları Mahkemesi Avrupa Birliği'nin değil, hemen hemen tüm Avrupa devletlerinin üyesi olduğu ayrı bir uluslararası teşkilat olan Avrupa Konseyi'nin organıdır. Ancak, Avrupa İnsan Hakları Sözleşmesi ve Avrupa İnsan Hakları Mahkemesi'nin içtihadı, Avrupa Birliği için de olmazsa olmaz asgarî standartları oluşturmaktadır.
                <hr/>
               
               
                <p className="baslik"><GavelIcon style={{color:"red",fontSize:"large"}}/> Avrupa İnsan Hakları Mahkemesi’ ne bireysel olarak başvuruda bulunmak istiyorsunuz, fakat;</p>
                    <ul>
                        <li>Bürokratik işlemlerden sıkıldınız mı?</li>
                        <li>Başvuru işlemlerini yapacak ve takip edecek zamanınız yok mu?</li>
                        <li>Nereye, nasıl başvuru yapılacağı konusunda bir fikriniz yok mu?</li>
                    </ul>
                    gibi soru ve sorunlarla uğraşmayın, bize ulaşın.
                
               <br/>
               <br/>
                <p className="baslik"><GavelIcon style={{color:"red",fontSize:"large"}}/> AİHM'e kimler başvurabilir?
                AİHS 34.Maddeye göre;
                    <ul>
                        <li>Gerçek kişiler,</li>
                        <li>Tüzel kişiler</li>
                        <li>Hükümet (devlet) dışı kuruluşlar,</li>
                        <li>Bireylerden oluşan gruplar,</li>
                        <li>AİHS veya ek Protokollerdeki haklarının ihlal edilmesi nedeniyle mağdur olduğunu düşünen herkes;</li>

                    </ul>
                    Avrupa İnsan Hakları Mahkemesi’ne başvuru yapabilir.
                </p>
                <br/>
                <br/>
                <p className="baslik"><GavelIcon style={{color:"red",fontSize:"large"}}/> AİHM'e başvuru şartları nelerdir?
                AİHS 35.Maddeye göre;
                    <ul>
                        <li>AİHM başvurusundan önce iç hukuk yolları tüketilmiş olmalıdır. Bu aşamada
gidilmesi gereken son iç hukuk yolu Anayasa Mahkemesidir.</li>
                        <li>Nihai kararın tebliğinden itibaren 6 ay içinde AİHM’e başvuruda bulunulması gerekir. (01.02.2022 tarihinden itibaren başvuru süresi 4 ay olarak değiştirilecektir.)</li>
                        <li>Başvurucunun kimliğinin belirli olması gereklidir. İsimsiz başvurular AİHM tarafından değerlendirilmeye alınmaz.</li>
                        <li>Başvurucu tarafından aynı olayın daha önce başka bir uluslararası kuruluşa veya AİHM’ e götürülmemiş olması gereklidir.</li>
                        <li>Başvuru, AİHS ve ek Protokollerdeki hak ve özgürlüklerle bağdaşır nitelikte olmalıdır.</li>
                        <li>Başvurucunun aleyhindeki durum önemli bir hak kaybına, zarara ya da ihlale sebebiyet verir nitelikte olmalıdır.</li>

                    </ul>
                    Avrupa İnsan Hakları Mahkemesi’ne başvuru yapabilir.
                </p>
                <br/>

                <p className="baslik"><GavelIcon style={{color:"red",fontSize:"large"}}/> Hemen arayın, AİHM bireysel başvurunuzu birlikte yapalım.
Yaptığınız başvuruyu sizin için takip edelim.  </p>
                <br/>

                <p className="baslik"><GavelIcon style={{color:"red",fontSize:"large"}}/> Ayrıca;
                    <ul>
                        <li>Adli Sicil kaydının sildirilmesi konusunda  www.adlisicilkaydisildir.com</li>
                        
                    </ul>
                    sitesini ziyaret edip uzman ekibimiz ile irtibata geçebilirsiniz.
                </p>
                <br/>

                </p>
            </div>
            
          
        </div>
    )
}

export default Hakkimizda
