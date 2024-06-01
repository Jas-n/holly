import './scss/style.scss';
import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

window.typo = {
    message: '',
    type: e => {
        e.preventDefault();
        let color = '#';
        let key   = null;
        for (let i = 0; i < 3 ; i++) {
            color += Math.round(Math.random() * 255).toString(16);
        }
        let map = {
            Alt: '@',
            AltGraph: '@',
            ArrowDown: '&darr;',
            ArrowLeft: '&larr;',
            ArrowRight: '&rarr;',
            ArrowUp: '&uarr;',
            Backspace: '&larrtl;',
            CapsLock: '&uArr;',
            Control: '&copy;',
            Delete: '&larrtl;',
            Enter: '&ldsh;',
            NumLock: '#',
            Shift: '&uArr;',
            Tab: '&rarrtl;',
        }
        if (map[e.key]) {
            key = map[e.key];
        } else {
            key = e.key.toUpperCase();
        }
        return {
            character: key,
            color:     color,
            message:   typo.message += key,
        };
    }
};
