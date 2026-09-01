/*
# Create portfolio content storage

1. New Tables
- `portfolio_content`: single shared portfolio profile for this personal website.
- `id` (uuid, primary key)
- `content` (jsonb, all editable profile, skill, project, education, and certification content)
- `created_at` (timestamp)
- `updated_at` (timestamp)

2. Security
- Row level security is enabled.
- The portfolio is intentionally a single public profile without sign-in, so the public website can read and update its own shared content using the anon client.
- Separate SELECT, INSERT, UPDATE, and DELETE policies are provided for anon and authenticated roles.

3. Important Notes
- This table is intentionally single-tenant because no account system was requested.
- The initial resume content is inserted by the website when no profile exists yet.
*/

CREATE TABLE IF NOT EXISTS portfolio_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content jsonb NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE portfolio_content ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can read portfolio content" ON portfolio_content;
CREATE POLICY "Public can read portfolio content"
  ON portfolio_content FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "Public can create portfolio content" ON portfolio_content;
CREATE POLICY "Public can create portfolio content"
  ON portfolio_content FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Public can update portfolio content" ON portfolio_content;
CREATE POLICY "Public can update portfolio content"
  ON portfolio_content FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Public can delete portfolio content" ON portfolio_content;
CREATE POLICY "Public can delete portfolio content"
  ON portfolio_content FOR DELETE
  TO anon, authenticated
  USING (true);
