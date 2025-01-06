import { useState } from 'react';
import { Header } from './components/Header';
import { EmailForm } from './components/EmailForm';
import { SurveyQuestion } from './components/SurveyQuestion';
import { RewardModal } from './components/RewardModal';
import { WithdrawPage } from './components/WithdrawPage';
import { UnlockPage } from './components/UnlockPage';
import { SURVEY_QUESTIONS } from './data/surveyQuestions';
import { generateRandomReward } from './utils/rewards';

export default function App() {
  const [step, setStep] = useState(0);
  const [balance, setBalance] = useState(100);
  const [showReward, setShowReward] = useState(false);
  const [currentReward, setCurrentReward] = useState(0);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showUnlock, setShowUnlock] = useState(false);

  const handleEmailSubmit = (email: string) => {
    setStep(1);
  };

  const handleSurveySubmit = () => {
    const reward = generateRandomReward();
    setCurrentReward(reward);
    setBalance(prev => prev + reward);
    setShowReward(true);
  };

  const handleRewardContinue = () => {
    setShowReward(false);
    if (step === SURVEY_QUESTIONS.length) {
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleWithdraw = () => {
    setShowReward(false);
    setShowUnlock(true);
  };

  const handleUnlock = () => {
    setShowUnlock(false);
    setShowWithdraw(true);
  };

  const handleBack = () => {
    setShowWithdraw(false);
    setStep(SURVEY_QUESTIONS.length);
  };

  if (showWithdraw) {
    return <WithdrawPage balance={balance} onBack={handleBack} />;
  }

  if (showUnlock) {
    return <UnlockPage balance={balance} onUnlock={handleUnlock} />;
  }

  return (
    <div className="min-h-screen bg-white p-6">
      {step > 0 && <Header balance={balance} />}
      
      {step === 0 && <EmailForm onSubmit={handleEmailSubmit} />}
      
      {step > 0 && step <= SURVEY_QUESTIONS.length && (
        <SurveyQuestion
          question={SURVEY_QUESTIONS[step - 1].question}
          options={SURVEY_QUESTIONS[step - 1].options}
          onSubmit={handleSurveySubmit}
        />
      )}

      {showReward && (
        <RewardModal
          reward={currentReward}
          onContinue={handleRewardContinue}
          onWithdraw={handleWithdraw}
          showWithdrawButton={step === SURVEY_QUESTIONS.length}
          isLastQuestion={step === SURVEY_QUESTIONS.length}
        />
      )}

      {step > 0 && (
        <p className="text-center text-sm text-gray-600 mt-6">
          Ao participar das atividades de recompensa, você concorda com nossos{' '}
          <a href="#" className="underline">Termos</a> e <a href="#" className="underline">Condições</a>.
        </p>
      )}
    </div>
  );
}