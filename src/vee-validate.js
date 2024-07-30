import { defineRule, configure } from 'vee-validate'
import {
    required,
    confirmed,
    max,
    min,
    between,
    numeric,
    url,
    alpha,
    alpha_dash,
    regex,
} from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import { default as en } from '@vee-validate/i18n/dist/locale/en.json'
configure({
    validateOnBlur: true,
    validateOnChange: false,
    validateOnInput: true,
    validateOnModelUpdate: true,
})

defineRule("regexPassword", (value) => {
    const regexPass =
        /^(?=.*?[A-Za-z])(?=.*?[0-9])|(?=.*?[0-9])(?=.*?[#?!@$%^&*-])|(?=.*?[A-Za-z])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const passwordValue = regexPass.test(value);
    if (!passwordValue) {
      return false;
    }
    return true;
  });
defineRule('required', required)
defineRule('email', (value) => {
    const regex =
        /^[a-zA-Z0-9]+(?:[._%+-]*[a-zA-Z0-9]+)*@(?:[a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,}|(?:\d{1,3}\.){3}\d{1,3})$/;
    if (regex.test(value)) {
        return true
    }
    return false
})
defineRule('imageExistsOrLinkEmpty', (value, [noImage, noBanner]) => {
    if (value && !noImage && !noBanner) {
        return false
    }
    return true
})
defineRule("fullWidth", (value) => {
    const pattern = /[^a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
    if (pattern.test(value)) {
      return false;
    }
    return true;
});
defineRule('between', between)
defineRule('numeric', numeric)
defineRule('url', url)
defineRule('confirmed', confirmed)
defineRule('max', max)
defineRule('min', min)
defineRule('alpha', alpha)
defineRule('alpha_dash', alpha_dash)
defineRule('regex', regex)
defineRule('maxLength', (value, [limit]) => {
    if (!value || value.length <= limit) {
        return true
    }
    return false
})
defineRule('maxPassword', (value, [limit]) => {
    if (!value || value.length <= limit) {
        return true
    }
    return false
})
defineRule('minPassword', (value, [limit]) => {
    if (!value || value.length >= limit) {
        return true
    }
    return false
})
configure({
    generateMessage: localize({
        eng: {
            messages: en.messages,
            names: en.names,
            fields: {
                email: {
                    fullWidth: "メールアドレスが正しい形式ではありません。"
                },
                facility: {
                    required: "担当施設を選択してください。（複数選択可）"
                },
                confirmPassword: {
                    confirmed: "パスワードが一致していません。"
                },
            },
        },
    }),
})
