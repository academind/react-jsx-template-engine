import GoalForm from './components/goal-form.js';
import Goals from './components/goals.js';
import Layout from './components/layout.js';

export default function GoalsPage() {
  return (
    <Layout title="Your Goals">
      <section>
        <GoalForm />
      </section>
      <section>
        <Goals />
      </section>
    </Layout>
  );
}
