🔐 Panel Logowania z Angular Material  

📌 Opis projektu  
Projekt to aplikacja frontendowa stworzona w Angular, wykorzystująca Angular Material do stworzenia panelu logowania (*LogPanel*). Po pomyślnym uwierzytelnieniu użytkownik uzyskuje dostęp do *AdminPanel*. Dostęp do panelu administracyjnego jest zabezpieczony przed nieautoryzowanym wejściem za pomocą Angular Guards.  

🚀 Technologie  
- **Framework:** Angular  
- **UI:** Angular Material  
- **Bezpieczeństwo:** AuthGuard  

⚙️ Funkcjonalności  
✅ Panel logowania (*LogPanel*)  
✅ Autoryzacja użytkownika (*admin, admin*)  
✅ Ochrona dostępu do *AdminPanel* za pomocą *AuthGuard*  
✅ Przekierowanie na stronę logowania w przypadku braku uprawnień  


🔐 Ochrona dostępu  
Dostęp do *AdminPanel* zabezpieczony jest za pomocą *AuthGuard*, który sprawdza, czy użytkownik jest zalogowany, korzystając z metody `isLoggedIn()` w *auth.service*. Jeśli użytkownik nie jest zalogowany, zostaje przekierowany na stronę logowania. 

📩 Kontakt  
Remigiusz Nowakowski  
