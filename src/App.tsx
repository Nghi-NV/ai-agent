import { Slider } from './components/Slider'
import { Footer } from './components/ui'
import {
  HeroSlide,
  PromptEngineeringSlide,
  PromptMistakesSlide,
  PromptBestPracticesSlide,
  AIToolsSlide,
  AIToolsSlide2,
  AIToolsComparisonSlide,
  UsingAIEffectivelySlide,
  SkillsRulesWorkflowSlide,
  ChoosingModeSlide,
  TipsTricksSlide1,
  TipsTricksSlide2,
  TipsTricksSlide3,
  BMADMethodSlide,
  SpecKitSlide,
  SpecKitWorkflowSlide,
  BMADvsSpecKitSlide,
  DevProcessSlide,
  AIinTestingSlide,
  AIinDocumentationSlide,
  RealWorldSlide1,
  RealWorldSlide2,
  SummarySlide,
  ThankYouSlide
} from './slides'

function App() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary">
      <main>
        <Slider className="min-h-screen">
          {/* Slide 1: Hero */}
          <HeroSlide />

          {/* Session 1: Prompt Engineering */}
          <PromptEngineeringSlide />
          <PromptMistakesSlide />
          <PromptBestPracticesSlide />

          {/* Session 2: AI Tools */}
          <AIToolsSlide />
          <AIToolsSlide2 />
          <AIToolsComparisonSlide />

          {/* Session 3: Using AI Effectively */}
          <UsingAIEffectivelySlide />
          <SkillsRulesWorkflowSlide />
          <ChoosingModeSlide />

          {/* Session 4: Tips & Tricks */}
          <TipsTricksSlide1 />
          <TipsTricksSlide2 />
          <TipsTricksSlide3 />

          {/* Session 5: BMAD & Spec Kit */}
          <BMADMethodSlide />
          <SpecKitSlide />
          <SpecKitWorkflowSlide />
          <BMADvsSpecKitSlide />

          {/* Session 6: Dev Process with AI */}
          <DevProcessSlide />
          <AIinTestingSlide />
          <AIinDocumentationSlide />

          {/* Session 7: Real World Applications */}
          <RealWorldSlide1 />
          <RealWorldSlide2 />

          {/* Summary & Thank You */}
          <SummarySlide />
          <ThankYouSlide />
        </Slider>
      </main>

      <Footer />
    </div>
  )
}

export default App
