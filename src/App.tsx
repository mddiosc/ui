import { Button } from './components/Button';

function App() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold' }}>
        @mddiosc/ui - Component Library
      </h1>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '600' }}>
          Button Component
        </h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem', fontWeight: '500' }}>
            Variants
          </h3>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem', fontWeight: '500' }}>
            Sizes
          </h3>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
        
        <div>
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem', fontWeight: '500' }}>
            States
          </h3>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>
      </section>
      
      <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}>
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
          For full documentation, run <code style={{ 
            background: '#f3f4f6', 
            padding: '0.125rem 0.375rem', 
            borderRadius: '0.25rem',
            fontFamily: 'monospace'
          }}>pnpm storybook</code>
        </p>
      </footer>
    </div>
  );
}

export default App;
