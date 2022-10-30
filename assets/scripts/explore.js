// explore.js
const synth = window.speechSynthesis;
let voices = []
let speaking_interval;
window.addEventListener('DOMContentLoaded', init);

const load_voices = (event) => {
  voices = synth.getVoices();
  // console.log(voices);
}

const get_voice_from_name = (voice_name) => {
  return voices.find(elem => elem.name === voice_name);
}

const generate_option = (speech_object) => {
  // console.log(speech_object);
  return `<option value=${speech_object.name} json_val="${JSON.stringify(speech_object)}">${speech_object.name} [${speech_object.lang}]</option>`
}

const populate_voice_field = (event, voices_selector) => {
  for(let i = 0; i < voices.length; ++i) {
    voices_selector.innerHTML += generate_option(voices[i]);
  }
  // console.log(voices_selector);
}

const set_speaking_image = (image_element) => {
  image_element.src = '../images/smiling-open.png'
}

const unset_speaking_image = (image_element) => {
  image_element.src = '../images/smiling.png'
}

const change_voice = (event, speech_utter) => {
  const new_voice = get_voice_from_name(event.target.value);
  // console.log(new_voice);
  speech_utter.voice = new_voice;
}

function init() {

  // Loading in all the necessary document elements
  const image_element   = document.querySelector('img');
  const text_field      = document.querySelector('#text-to-speak');
  const voices_selector = document.querySelector('#voice-select');
  const talk_button     = document.querySelector('button');

  const speech_utter    = new SpeechSynthesisUtterance();

  synth.onvoiceschanged = (event) => {
    load_voices(event);
    populate_voice_field(event, voices_selector);
  }

  voices_selector.addEventListener('change', (event) => {
    change_voice(event, speech_utter, voices_selector);
  })

  talk_button.addEventListener('click', (event) => {
    const speech_text = text_field.value;
    speech_utter.text = speech_text;
    synth.speak(speech_utter);
  })

  speech_utter.onstart = _ => set_speaking_image(image_element)
  speech_utter.onend = _ => unset_speaking_image(image_element)

}
