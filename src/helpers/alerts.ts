import { isNil } from "lodash";
import Swal from "sweetalert2";

type positionT = 'top' | 'top-start' | 'top-end' | 'center' | 'center-start' | 'center-end' | 'bottom' | 'bottom-start' | 'bottom-end';
type iconsT = 'success' | 'error' | 'warning' | 'info' | 'question';

interface alertsI {
    title: string;
    width?: number;
    position?: positionT;
    icon?: iconsT;
    showConfirmButton?: boolean;
    timer?: number;
    showCloseButton?: boolean;
}

const iconsSvgObj = {
    'success': `<svg class="w-5 h-5 inline-block text-emerald-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>`,
    'error': `<svg class="w-5 h-5 inline-block text-rose-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>`,
    'warning': `<svg class="w-5 h-5 inline-block text-amber-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>`,
    'info': `<svg class="w-5 h-5 inline-block text-cyan-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    'question': `<svg class="w-5 h-5 inline-block text-sky-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
};

const simpleAlertTimer = (data: alertsI) => {
    const iconSelected: string = isNil(data?.icon) === false && data.icon ? iconsSvgObj[data.icon] : "";

    const alertMessageHtml = `
    <div style="display: flex; align-items: center; justify-content: center; gap: 8px; color: #f8fafc; font-size: 14px; font-weight: 500; font-family: system-ui, sans-serif;">
        ${iconSelected}
        <span>${isNil(data?.title) === false ? data.title : ""}</span>
    </div>`;

    return Swal.fire({
        width: isNil(data?.width) === false ? data.width : 340,
        position: isNil(data?.position) === false ? data.position : "bottom-end",
        html: alertMessageHtml,
        showConfirmButton: isNil(data?.showConfirmButton) === false ? data.showConfirmButton : false,
        timer: isNil(data?.timer) === false ? data.timer : 2000,
        timerProgressBar: true,
        showCloseButton: isNil(data?.showCloseButton) === false ? data.showCloseButton : false,
        toast: true,
        background: "#111827",
        color: "#f8fafc",
        customClass: {
            popup: "border border-white/10 rounded-xl shadow-2xl backdrop-blur-md"
        }
    });
};

export {
    simpleAlertTimer
};