/* Kerem DÖLEKSÖZ */

import React from "react";
import Select from 'react-select';
import { countries } from 'countries-list';
import sisoftlogo from "../Assets/sisoftlogo.jpg";
import { useTranslation } from 'react-i18next';
import './DealershipPage.css';
import trLogo from "../Assets/tr.png"
import enLogo from "../Assets/en.png"


const countryOptions = Object.entries(countries).map(([code, country]) => ({
    value: code,
    label: country.name
}));



const DealershipPage = () => {
    const { t, i18n } = useTranslation(); // Çeviri fonksiyonu

    const handleLanguageChange = (selectedOption) => {
        i18n.changeLanguage(selectedOption.value);
    };

    const languageOptions = [
        { value: 'en', label: 'English' },
        { value: 'tr', label: 'Türkçe' }
    ];

    return (
        <div className="form-container">
            <div className="form-header">
                <img src={sisoftlogo} alt="Sisoft Logo" className="logo left-logo" />
                <h1>{t('appTitle')}</h1>
                <img src={sisoftlogo} alt="Sisoft Logo" className="logo right-logo" />
            </div>
            <div className="form-body">
                <Select
                    options={languageOptions}
                    onChange={handleLanguageChange}
                    className="language-select"
                    placeholder={t('languagePlaceholder')}
                />
                <h2>{t('formTitle')}</h2>
                <p>{t('formSubtitle')}</p>
                <form>
                    <div className="form-row">
                        <input type="text" placeholder={t('name')} />
                        <input type="text" placeholder={t('organization')} />
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder={t('position')} />
                        <input type="tel" placeholder={t('phone')} />
                    </div>
                    <div className="form-row">
                        <input type="email" placeholder={t('email')} />
                    </div>
                    <div className="form-row">
                        <textarea placeholder={t('description')}></textarea>
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder={t('address')} />
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder={t('city')} />
                        <input type="text" placeholder={t('district')} />
                    </div>
                    <div className="form-row">
                        <Select
                            options={countryOptions}
                            placeholder={t('countryPlaceholder')}
                            className="country-select"
                        />
                    </div>
                    <div className="form-row">
                        <button type="submit">{t('submit')}</button>
                    </div>
                </form>
            </div>
            <div className="footer">
                <p>{t('footer')}</p>
            </div>
        </div>
    );
}

export default DealershipPage;
