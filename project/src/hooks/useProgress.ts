import { create } from 'zustand';

interface ProgressState {
  step: 1 | 2;
  progress: number; 
  isComplete: boolean;
  videoWatched: boolean;
  setStep: (step: 1 | 2) => void;
  setProgress: (progress: number) => void;
  completeBooking: () => void;
  setVideoWatched: (watched: boolean) => void;
}

export const useProgress = create<ProgressState>((set) => ({
  step: 1,
  progress: 15, // Start with 15% filled
  isComplete: false,
  videoWatched: false,
  setStep: (step) => set((state) => ({ 
    step,
    // Increase progress based on step and video watched status
    progress: step === 1 ? 15 : state.videoWatched ? 75 : 50
  })),
  setProgress: (progress) => set({ progress }),
  setVideoWatched: (watched) => set((state) => ({
    videoWatched: watched,
    progress: watched ? 50 : state.progress
  })),
  completeBooking: () => set({ 
    progress: 100,
    isComplete: true,
    step: 2
  })
}));