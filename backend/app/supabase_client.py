"""
Juryline — Supabase Client
Creates the Supabase client using the service role key.
Backend always uses service role to bypass RLS.
"""

from supabase import create_client, Client
from app.config import get_settings


def get_supabase_client() -> Client:
    """Get Supabase client with service role key (bypasses RLS)."""
    settings = get_settings()
    
    # Skip real connection if using placeholder values
    if "placeholder" in settings.supabase_url.lower() or "placeholder" in settings.supabase_service_key.lower():
        print("WARNING: Using placeholder Supabase credentials - some features will not work")
        # Return a mock client to prevent crashes during development
        return None  # type: ignore
    
    return create_client(
        settings.supabase_url,
        settings.supabase_service_key,
    )


# Singleton client for use across the app
supabase: Client = get_supabase_client()
