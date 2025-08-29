import type { Request, Response } from 'express';
import { neon } from '@neondatabase/serverless';

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  try {
    return neon(url);
  } catch {
    return null;
  }
}

export async function postConsultation(req: Request, res: Response) {
  const sql = getSql();
  const { fullName, email, phone, preferredMode, preferredDate, concerns } = req.body || {};

  if (!fullName || !email || !phone || !preferredMode || !preferredDate || !concerns) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  if (!sql) {
    return res.status(501).json({ message: 'Database is not configured yet. Please connect Neon and set DATABASE_URL.' });
  }

  try {
    // Ensure required extension for gen_random_uuid()
    await sql`CREATE EXTENSION IF NOT EXISTS pgcrypto`;

    await sql`CREATE TABLE IF NOT EXISTS consultations (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      preferred_mode TEXT NOT NULL,
      preferred_date DATE NOT NULL,
      concerns TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`;

    const rows = await sql`INSERT INTO consultations (full_name, email, phone, preferred_mode, preferred_date, concerns)
      VALUES (${fullName}, ${email}, ${phone}, ${preferredMode}, ${preferredDate}, ${concerns})
      RETURNING id`;

    return res.status(201).json({ id: rows[0].id });
  } catch (err: any) {
    return res.status(500).json({ message: 'Failed to save consultation', error: err?.message });
  }
}

export async function getConsultations(_req: Request, res: Response) {
  const sql = getSql();
  if (!sql) {
    return res.status(501).json({ message: 'Database is not configured yet. Please connect Neon and set DATABASE_URL.' });
  }
  try {
    const rows = await sql`SELECT id, full_name, email, phone, preferred_mode, preferred_date, concerns, created_at
      FROM consultations ORDER BY created_at DESC LIMIT 200`;
    return res.json(rows);
  } catch (err: any) {
    return res.status(500).json({ message: 'Failed to fetch consultations', error: err?.message });
  }
}
