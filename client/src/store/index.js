import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#dd2234',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
})

export default state;