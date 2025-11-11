# 🎨 3D Viewer for Obsidian

**Embed and view 3D models directly in your Obsidian notes!** A full-featured 3D viewer with support for multiple formats, automatic texture loading, and flexible display settings.

![3DV 1](https://github.com/user-attachments/assets/c5ed43fc-d31c-4f1a-8843-4077798a3800)
---


## ✨ Features

### 📦 Wide Format Support
- **GLTF/GLB** — modern standard for web 3D
- **FBX** — popular format from 3D editors
- **OBJ** — classic 3D model format
- **USDZ** — Apple's format for AR
- Plus: **STL**, **DAE**, **3DS**, **PLY**, **3MF**
<img width="1080" height="1080" alt="3DVV" src="https://github.com/user-attachments/assets/1c6bd9ba-383f-4103-b9c6-5eb052f35b5c" />

### 🎯 Smart Texture Loading
The plugin **automatically finds and applies textures** to your models! Just place textures in a folder with the model's name:

```
Cache/
├── MyModel.fbx
└── MyModel/
    ├── MyModel_Diffuse.png
    ├── MyModel_Normal.png
    └── MyModel_Roughness.png
```

All texture types are supported:
- 🎨 **Diffuse/Albedo** — base color
- 🔦 **Normal maps** — surface details
- ⚡ **Roughness** — surface roughness
- 🪙 **Metalness** — metallic properties
- 💡 **Emissive** — glow/emission

### ⚙️ Flexible Settings

#### 🖼️ Window Format
- **Standard** (40:27) — for most models
- **Long** (10:11) — for vertical objects
- **Custom** — set any size (256-3840px)

#### 🎬 Camera Controls
- 💾 **Save Position** — remember your preferred viewpoint
- 🔒 **Lock Axes** — fix camera horizontally or vertically
- 🔄 **OrbitControls** — rotate models with your mouse
![3DV 2](https://github.com/user-attachments/assets/e197e1df-5c1f-4764-b549-ad5ef22b7fb4)

#### 🌆 Background & Environment
- 🎨 Set **custom images** as background
- 🌍 **360° Panorama** — surround model with spherical photography
- 🫥 **Transparent background** — for clean viewing
![3DV 4](https://github.com/user-attachments/assets/3e0398a8-7be2-4db3-b589-81d17218ca34)

#### 💡 Lighting (5 modes)
- **Ambient** — diffuse lighting
- **Directional** — directional light (like sunlight)
- **Point** — point light sources
- **Hemisphere** — hemisphere lighting
- **Mixed** — combined (default)
![3DV 3](https://github.com/user-attachments/assets/ad795647-9f68-4c65-af3b-3cc43812baeb)

### 🌐 Multilingual
Interface available in **12 languages**: 🇬🇧 🇷🇺 🇺🇦 🇧🇾 🇰🇿 🇩🇪 🇫🇷 🇪🇸 🇮🇹 🇵🇱 🇨🇿 🇵🇹 🇨🇳

---

## 🚀 How to Use

### 1️⃣ Basic Embedding
Simply add a link to a 3D file in your note:

```markdown
![[MyModel.fbx]]
```

Click the link — the model will expand right in your note! ✨

### 2️⃣ Open in Separate Tab
You can open the model in a full tab for detailed viewing — just use Obsidian's standard file opening.

### 3️⃣ Configure Display
Click the **⚙️ settings button** in the upper right corner of the model:

- 📍 **Menu Position** — place the settings menu where convenient
- 📂 **Initial State** — model will be expanded or collapsed by default
- 🖼️ **Window Format** — choose proportions or set your own size
- 🎯 **Grid** — enable/disable coordinate grid
- 📸 **Camera** — save current camera position
- 💡 **Lighting** — adjust light type and intensity
- 🌄 **Background** — set image or panorama

### 4️⃣ Individual Settings
Each model can have **its own parameters!** Use the **"Only for this file"** checkbox to create unique settings for a specific model.

### 5️⃣ Set Background/Panorama
1. Click **"Set Background"**
2. Enter an image link:
   - `[[MyImage.jpg]]` — file from your vault
   - `https://example.com/image.jpg` — external link
3. Enable **"Panorama"** if you want a 360° environment

---

## 🎯 Useful Tips

### 📁 File Organization
Structure models and textures like this:
```
MyProject/
├── Character.fbx          ← 3D model
└── Character/             ← Textures folder
    ├── Skin_Diffuse.png
    ├── Skin_Normal.png
    └── Clothes_Diffuse.png
```

### 🎨 Texture Naming
The plugin searches for textures by keywords:
- `Material_Diffuse.png` or `Material_Color.png`
- `Material_Normal.png` or `Material_NRM.png`
- `Material_Roughness.png`
- `Material_Metallic.png`

### ⚡ Performance Optimization
- The plugin **automatically stops rendering** when the model is not visible on screen
- Rendering resumes automatically when scrolling
- This saves CPU and GPU resources! 🔋

---

## 🛠️ Technical Details

**Engine:** Three.js  
**Settings Format:** JSON (saved in plugin's data.json)  

### Hotkeys
- **Left Click + Drag** — rotate model
- **Right Click + Drag** — pan view
- **Mouse Wheel** — zoom in/out

---

## 🌟 Advantages

✅ **Easy to Use** — works out of the box  
✅ **Automation** — textures are applied automatically  
✅ **Flexibility** — individual settings for each model  
✅ **Performance** — smart resource management  
✅ **Integration** — full Obsidian compatibility  

---

## 📝 License

Use this plugin freely for personal and commercial projects!

---

**Turn your notes into a 3D gallery!** 🎨✨
