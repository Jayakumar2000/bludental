# neudental v1 - Component Files

## Important: Full Component Source

The full component source files are large (some 50k+ chars) and are available in the Google AI Studio project.

**Source Project**: https://aistudio.google.com/apps/66da5869-68f8-4cb2-a68d-41807a99ed18

## Component List

| File | Size | Description |
|------|------|-------------|
| Navbar.tsx | ~13k | Navigation with treatment dropdown, mobile menu |
| Hero.tsx | ~8k | Hero section with booking CTA |
| About.tsx | ~8k | About Dr. Swetha and clinic highlights |
| Services.tsx | ~11k | Treatment grid with details |
| TreatmentDetailView.tsx | ~57k | Full treatment sub-pages with SEO content |
| BookingForm.tsx | ~16k | Appointment booking with Firebase integration |
| Testimonials.tsx | ~6k | Patient testimonials grid |
| LocationDetails.tsx | ~7k | Location, hours, map embed |
| SmileSlider.tsx | ~7k | Before/after comparison slider |
| SymptomChecker.tsx | ~8k | Interactive symptom guide |
| Footer.tsx | ~8k | Site footer with links |

## Getting Component Files

### Option 1: Export from Google AI Studio
1. Go to the AI Studio project link above
2. Click "Export" button in the Code panel
3. Download the ZIP file
4. Copy the component files to this directory

### Option 2: Copy from AI Studio Editor
1. Open the project in AI Studio
2. Navigate to each file in the file explorer
3. Copy the full content
4. Paste into the corresponding file here

## Component Props Summary

```typescript
// Navbar
interface NavbarProps {
  onSelectTreatment: (id: string) => void;
  onScrollToBooking: () => void;
  onLogoClick: () => void;
}

// Hero
interface HeroProps {
  onScrollToBooking: () => void;
}

// Services
interface ServicesProps {
  onSelectTreatment: (id: string) => void;
  onViewTreatmentDetail: (id: string) => void;
}

// SymptomChecker
interface SymptomCheckerProps {
  onSelectTreatment: (id: string) => void;
}

// BookingForm
interface BookingFormProps {
  preSelectedTreatmentId: string;
  onClose?: () => void;
}

// TreatmentDetailView
interface TreatmentDetailViewProps {
  treatmentId: string;
  onBack: () => void;
  onBook: (id: string) => void;
}

// LocationDetails
interface LocationDetailsProps {
  onScrollToBooking: () => void;
}

// Footer
interface FooterProps {
  onSelectTreatment: (id: string) => void;
}
```
