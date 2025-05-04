flowchart TD
    %% Global Entities
    Browser["User Browser"]:::ui
    LocalStorage[(LocalStorage & Cookies)]:::data
    CDN["CDN / Static Asset Host"]:::external
    ExternalAPI["External Genshin/Teyvat APIs"]:::external
    GitHub["GitHub Repo"]:::tooling
    CI["GitHub Actions CI/CD"]:::tooling
    Deploy["Deployment Target (Vercel/Netlify)"]:::tooling

    %% Next.js Application Layer
    subgraph "Next.js Application" 
        direction TB
        subgraph "App Router & Pages" 
            direction TB
            Layout["layout.tsx"]:::ui
            Loading["loading.tsx"]:::ui
            Error["error.tsx"]:::ui
            PageHome["page.tsx"]:::ui
            CharPage["[slug]/page.tsx"]:::ui
            WeapPage["[slug]/page.tsx"]:::ui
            ArtPage["[slug]/page.tsx"]:::ui
            AbyssPage["spiral-abyss/page.tsx"]:::ui
            EventsPage["events/page.tsx"]:::ui
            AboutPage["about/page.tsx"]:::ui
            CookiePage["cookie-policy/page.tsx"]:::ui
            PrivacyPage["privacy-policy/page.tsx"]:::ui
        end
        subgraph "React Components" 
            direction TB
            CharClient["characterClient.tsx"]:::ui
            WeapClient["weaponClient.tsx"]:::ui
            ArtClient["artifactClient.tsx"]:::ui
            AbyssClient["spiralAbyssClient.tsx"]:::ui
            EventsClient["eventsClient.tsx"]:::ui
            subgraph "Common & Layout"
                direction TB
                QueryProv["queryProvider.tsx"]:::ui
                ThemeSync["clientThemeSync.tsx"]:::ui
                Header["header.tsx"]:::ui
                Footer["footer.tsx"]:::ui
            end
        end
        subgraph "State Management Atoms"
            direction TB
            FeatureAtoms["feature.atoms.ts"]:::data
            GeneralAtoms["general.atoms.ts"]:::data
            ArtifactAtom["artifact.atom.ts"]:::data
            CharacterAtom["character.atom.ts"]:::data
            WeaponAtom["weapon.atom.ts"]:::data
        end
        subgraph "Hooks & Services"
            direction TB
            Hooks["use*Data.ts & useInfiniteScroll.ts"]:::data
            HTTP["axios.service.ts"]:::data
            SystemSvc["system.service.ts"]:::data
            TeyvatSvc["teyvatArchive.service.ts"]:::data
        end
        subgraph "Utilities & Types"
            direction TB
            Utils["utils & formatters"]:::data
            Types["Type Definitions"]:::data
        end
    end

    %% Static Assets Node
    CDNASsets["public/ & src/assets/"]:::external

    %% Connections
    Browser -->|"HTTP GET"| Layout
    Layout -->|renders| PageHome
    PageHome -->|uses| CharClient
    CharClient -->|reads| CharacterAtom
    CharClient -->|calls| Hooks
    Hooks -->|fetches| TeyvatSvc
    TeyvatSvc -->|via HTTP| ExternalAPI
    ExternalAPI -->|JSON| TeyvatSvc
    TeyvatSvc -->|returns data| Hooks
    Hooks -->|provides| CharClient
    CharClient -->|renders| Browser

    Browser -->|loads assets| CDN
    CDN -->|serves| Browser

    Browser -->|store/theme| LocalStorage
    Browser -->|read/theme| LocalStorage

    GitHub -->|triggers| CI
    CI -->|deploy| Deploy

    %% Click Events for component_mapping
    click Layout "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/app/layout.tsx"
    click Loading "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/app/loading.tsx"
    click Error "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/app/error.tsx"
    click PageHome "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/app/page.tsx"
    click CharPage "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/app/characters/[slug]/page.tsx"
    click WeapPage "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/app/weapons/[slug]/page.tsx"
    click ArtPage "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/app/artifacts/[slug]/page.tsx"
    click AbyssPage "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/app/spiral-abyss/page.tsx"
    click EventsPage "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/app/events/page.tsx"
    click AboutPage "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/app/about/page.tsx"
    click CookiePage "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/app/cookie-policy/page.tsx"
    click PrivacyPage "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/app/privacy-policy/page.tsx"
    click CharClient "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/components/characters/characterClient.tsx"
    click WeapClient "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/components/weapons/weaponClient.tsx"
    click ArtClient "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/components/artifacts/artifactClient.tsx"
    click AbyssClient "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/components/spiralAbyss/spiralAbyssClient.tsx"
    click EventsClient "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/components/events/eventsClient.tsx"
    click QueryProv "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/components/common/providers/queryProvider.tsx"
    click ThemeSync "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/components/common/theme/clientThemeSync.tsx"
    click Header "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/components/layout/header/header.tsx"
    click Footer "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/components/layout/footer/footer.tsx"
    click FeatureAtoms "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/atoms/feature.atoms.ts"
    click GeneralAtoms "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/atoms/general.atoms.ts"
    click ArtifactAtom "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/atoms/teyvat/artifact.atom.ts"
    click CharacterAtom "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/atoms/teyvat/character.atom.ts"
    click WeaponAtom "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/atoms/teyvat/weapon.atom.ts"
    click Hooks "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/hooks/useCharacterData.ts"
    click HTTP "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/services/http/axios.service.ts"
    click SystemSvc "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/services/system/system.service.ts"
    click TeyvatSvc "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/services/teyvatServer/teyvatArchive.service.ts"
    click Utils "https://github.com/azula9713/teyvat-archive-client-next/blob/main/src/utils/statValue.formatter.ts"
    click ExternalAPI "https://github.com/azula9713/teyvat-archive-client-next/tree/main/public/"
    click CDNASsets "https://github.com/azula9713/teyvat-archive-client-next/tree/main/public/"

    %% Styles
    classDef ui fill:#D0E8FF,stroke:#0366d6,color:#000
    classDef data fill:#E6F4EA,stroke:#28a745,color:#000
    classDef external fill:#FFF5E5,stroke:#d97706,color:#000
    classDef tooling fill:#F0F0F0,stroke:#6c757d,color:#000