import React from 'react';
import { Container, Button } from 'react-bootstrap';

export default function Hero() {
  return (
    <section className="hero-generic" id="home">
      <Container>
        <span className="hero-pill-generic">⚡ Modern Full Homepage via React-Bootstrap</span>
        <h1 className="hero-heading-generic">
          Building Scalable Cloud<br />Software Platforms
        </h1>
        <p className="hero-text-generic">
          DevFlow provides developers with high-performance components, edge deployment integration, and deep observability out of the box.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Button className="btn-generic-primary">
            Start Free Trial
          </Button>
          <Button className="btn-generic-outline">
            Documentation
          </Button>
        </div>
      </Container>
    </section>
  );
}
