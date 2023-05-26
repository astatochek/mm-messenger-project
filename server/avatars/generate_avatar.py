from PIL import ImageDraw, Image
import numpy as np
import hashlib

def generate_avatar(avatar_size: int, nickname: str) -> Image:
    background_color = '#f2f1f2'
    s = nickname

    bytes = hashlib.md5(s.encode('utf-8')).digest()

    main_color = bytes[:3]
    main_color = tuple(channel // 2 + 104 for channel in main_color)
    
    need_color = np.array([bit == '1' for byte in bytes[3:3+9] for bit in bin(byte)[2:].zfill(8)]).reshape(6, 12)
    need_color = np.concatenate((need_color, need_color[::-1]), axis=0)

    for i in range(12):
        need_color[0, i] = 0
        need_color[11, i] = 0
        need_color[i, 0] = 0
        need_color[i, 11] = 0

    img_size = (avatar_size, avatar_size)
    block_size = avatar_size // 12 # размер квадрата

    img = Image.new('RGB', img_size, background_color)
    draw = ImageDraw.Draw(img)

    for x in range(avatar_size):
        for y in range(avatar_size):
            need_to_paint = need_color[x // block_size, y // block_size]
            if need_to_paint:
                draw.point((x, y), main_color)

    return img