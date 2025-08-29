import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Consultation {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  preferred_mode: string;
  preferred_date: string;
  concerns: string;
  created_at: string;
}

export default function AdminConsultations() {
  const [data, setData] = useState<Consultation[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/consultations');
        const json = await res.json();
        if (!res.ok) throw new Error(json?.message || 'Failed to load');
        setData(json);
      } catch (e: any) {
        setError(e.message || 'Failed to load');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="container max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Consultation Requests</CardTitle>
          </CardHeader>
          <CardContent>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-600 text-sm">{error}</p>}
            {!loading && !error && (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Created</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Mode</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Concerns</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(data ?? []).map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{new Date(row.created_at).toLocaleString()}</TableCell>
                        <TableCell>{row.full_name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.phone}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{row.preferred_mode}</Badge>
                        </TableCell>
                        <TableCell>{new Date(row.preferred_date).toLocaleDateString()}</TableCell>
                        <TableCell className="max-w-[320px] truncate" title={row.concerns}>{row.concerns}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {(!data || data.length === 0) && (
                  <p className="text-sm text-muted-foreground mt-4">No records yet.</p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
