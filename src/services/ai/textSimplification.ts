import { HuggingFaceInference } from '@huggingface/inference';
import { CamemBERT } from './models/camembert';
import { FlauBERT } from './models/flaubert';

// Initialisation du client HuggingFace
const hf = new HuggingFaceInference(process.env.VITE_HUGGINGFACE_API_KEY || '');

export interface SimplificationResult {
  original: string;
  simplified: string;
  confidence: number;
  model: string;
}

export class TextSimplifier {
  /**
   * Simplification avec CamemBERT (modèle français)
   */
  async simplifyWithCamemBERT(text: string): Promise<SimplificationResult> {
    try {
      const response = await hf.textGeneration({
        model: 'camembert/camembert-large-fquad',
        inputs: `simplifier: ${text}`,
        parameters: {
          max_length: 512,
          temperature: 0.7,
          do_sample: true
        }
      });

      return {
        original: text,
        simplified: response.generated_text,
        confidence: 0.85,
        model: 'CamemBERT'
      };
    } catch (error) {
      console.error('Erreur lors de la simplification avec CamemBERT:', error);
      throw error;
    }
  }

  /**
   * Simplification avec FlauBERT (alternative française)
   */
  async simplifyWithFlauBERT(text: string): Promise<SimplificationResult> {
    try {
      const response = await hf.textGeneration({
        model: 'flaubert/flaubert_large_cased',
        inputs: `simplifier: ${text}`,
        parameters: {
          max_length: 512,
          temperature: 0.7,
          do_sample: true
        }
      });

      return {
        original: text,
        simplified: response.generated_text,
        confidence: 0.82,
        model: 'FlauBERT'
      };
    } catch (error) {
      console.error('Erreur lors de la simplification avec FlauBERT:', error);
      throw error;
    }
  }

  /**
   * Simplification avec modèle local BLOOM (version légère)
   */
  async simplifyWithLocalBLOOM(text: string): Promise<SimplificationResult> {
    try {
      // Implémentation locale du modèle BLOOM
      return {
        original: text,
        simplified: text, // À remplacer par l'implémentation réelle
        confidence: 0.75,
        model: 'BLOOM-local'
      };
    } catch (error) {
      console.error('Erreur lors de la simplification avec BLOOM local:', error);
      throw error;
    }
  }
}

export const textSimplifier = new TextSimplifier();