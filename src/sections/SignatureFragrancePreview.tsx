import { SectionTitle } from '../components/display/SectionTitle'
import { Button } from '../components/ui/Button'

export function SignatureFragrancePreview() {
  return (
    <section className="signature-fragrance-preview" aria-labelledby="signature-fragrance-title">
      <div className="section-header">
        <SectionTitle id="signature-fragrance-title">Signature fragrance</SectionTitle>
      </div>
      <div className="signature-fragrance-preview__content" aria-hidden="true">
        <div className="signature-fragrance-preview__visual" />
        <div className="signature-fragrance-preview__text">
          <p className="signature-fragrance-preview__description">
            A carefully composed scent that defines the house.
          </p>
          <Button variant="primary" size="md">Discover</Button>
        </div>
      </div>
    </section>
  )
}
