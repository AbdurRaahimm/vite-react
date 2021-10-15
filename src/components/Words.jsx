import { useTranslation } from 'react-i18next';

function Words() {
    const { t, i18n } = useTranslation();
    const handleClick = (lang) =>{
        i18n.changeLanguage(lang)

    }

    // const change =(option) =>{
    //     localStorage.setItem('i18nextLng', option.target.value)
    //         // i18n.changeLanguage(option)
    //         window.location.reload();
    // }
    // const lang = localStorage.getItem('i18nextLng') || 'en'

    return (
        <div className="container">
           <h1>{t('welcome')}</h1>

           <button onClick={()=>handleClick('en')} >English</button>
           <button onClick={()=>handleClick('bn')}>Bangla</button>
           <button onClick={()=>handleClick('ar')}>Arabic</button>

           {/* <select onChange={change} value={lang}>
                <option value="en">English</option>
                <option value="bn">Bangla</option>
                <option value="ar">Arabic</option>
          </select> */}

        </div>
    )
}

export default Words
