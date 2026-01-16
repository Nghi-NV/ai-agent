// Asset imports for project showcase
import googleAiStudio from './google_ai_studio.png'
import studioVisionaryAi from './studio_visionary_ai.png'
import studioNeonArcade from './studio_neon_arcade.png'
import studioLearnEnglish from './studio_learn_english.png'
import nconsole from './nconsole.png'
import adbCapture from './adb_capture.png'
import myToolKit from './my_tool_kit.jpg'
import iconGenerator from './icon_generator.png'
import projectCreater from './project_creater.png'
import proxyman from './proxyman.png'
import androidMirror from './android_mirror.png'
import apiAutoTest from './api_auto_test.png'
import youtuDemo from '../files/youtu_demo.mp4'

export interface Asset {
  name: string
  image?: string
  url?: string
}

export const assets: Asset[] = [
  // Google AI Studio
  {
    name: 'Google AI Studio',
    image: googleAiStudio,
  },
  {
    name: 'Studio Visionary AI',
    image: studioVisionaryAi,
    url: "https://aistudio.google.com/u/1/apps/drive/1qjYEDmhBPAILlJEGXhd5Yh-GwniVU4Wo?showPreview=true&showAssistant=true"
  },
  {
    name: 'Studio Neon Arcade',
    image: studioNeonArcade,
    url: 'https://aistudio.google.com/u/1/apps/drive/1de-iU1EPHP3Zh4Mboiaq0ZRJE-IbD4PV?showPreview=true&showAssistant=true'
  },
  {
    name: 'Studio Learn English',
    image: studioLearnEnglish,
    url: 'https://aistudio.google.com/u/1/apps/drive/1vZnJMubY48egN4-V5TTU_cjxa-ZlqG8Z?showPreview=true&showAssistant=true'
  },

  // Tools with Tauri
  {
    name: 'NConsole',
    image: nconsole,
  },
  {
    name: 'ADB Capture',
    image: adbCapture,
  },
  {
    name: 'My Tool Kit',
    image: myToolKit,
  },
  {
    name: 'Icon Generator',
    image: iconGenerator,
  },
  {
    name: 'Project Creater',
    image: projectCreater,
  },
  {
    name: 'Proxyman',
    image: proxyman,
  },
  {
    name: 'Android Mirror',
    image: androidMirror,
  },
  {
    name: 'API Auto Testing',
    image: apiAutoTest,
  },
  // App Demo
  {
    name: 'Youtu Demo',
    url: youtuDemo
  }
]