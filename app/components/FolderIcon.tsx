const folderBack = "/icons/folder-back.svg";
const folderFront = "/icons/folder-front.png";
const docDotPink = "/icons/folder-doc-icon-1.svg";
const docDotPurple = "/icons/folder-doc-icon-2.svg";
const docDotBlue = "/icons/folder-doc-icon-3.svg";

/**
 * The small mockup-style "document" card that peeks out of the folder,
 * matching the Figma "Folder" component's paper sheets.
 */
function DocumentCard({ dotSrc }: { dotSrc: string }) {
  return (
    <div className="bg-white border-[0.581px] border-[#ededed] border-solid flex items-start overflow-hidden pb-[12.203px] pt-[16.249px] px-[6.392px] rounded-[6.973px] size-full">
      <div className="flex flex-col gap-[6.973px] items-start w-[104.614px]">
        <div className="flex flex-col gap-[4.649px] items-start w-full">
          <div className="flex gap-[4.068px] items-start w-full">
            <div className="bg-[#ededed] h-[9.297px] rounded-[18.595px] w-[38.906px]" />
            <div className="bg-[#ededed] h-[9.297px] rounded-[18.595px] flex-1" />
          </div>
          <div className="bg-[#ededed] h-[9.297px] rounded-[18.595px] w-full" />
          <div className="bg-[#ededed] h-[9.297px] rounded-[18.595px] w-full" />
        </div>
        <div className="flex flex-col gap-[4.068px] items-start w-full">
          <div className="bg-[#ededed] h-[9.297px] rounded-[18.595px] w-full" />
          <div className="bg-[#ededed] h-[9.297px] rounded-[18.595px] w-full" />
          <div className="bg-[#ededed] h-[9.297px] rounded-[18.595px] w-full" />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" className="h-[15.331px] w-[52.095px]" src={dotSrc} />
      </div>
    </div>
  );
}

/**
 * Folder illustration ported from Figma (node 731:47214 "Folder 1").
 * Layer order matches the source: back panel, then the paper stack,
 * then the translucent front flap on top so the sheets look tucked in.
 */
export default function FolderIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-[159.774/160] ${className}`}>
      <div className="absolute inset-[16.35%_0_0_0]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" className="block w-full h-full" src={folderBack} />
      </div>

      <div className="absolute inset-[-0.2%_12.94%_13.44%_6.09%]">
        <div className="absolute inset-[0_21.39%_0_0] flex items-center justify-center" style={{ containerType: "size" }}>
          <div className="h-[hypot(10.2019cqw,91.1381cqh)] w-[hypot(89.7981cqw,-8.8619cqh)] rotate-[-7.67deg] skew-x-[-2.99deg]">
            <DocumentCard dotSrc={docDotPink} />
          </div>
        </div>
        <div className="absolute inset-[2.07%_10.57%_1.98%_14.54%] flex items-center justify-center" style={{ containerType: "size" }}>
          <div className="h-[hypot(5.36116cqw,95.3758cqh)] w-[hypot(94.6388cqw,-4.62424cqh)] rotate-[-3.84deg] skew-x-[-1.5deg]">
            <DocumentCard dotSrc={docDotPurple} />
          </div>
        </div>
        <div className="absolute inset-[4.33%_0_4.21%_29.17%]">
          <DocumentCard dotSrc={docDotBlue} />
        </div>
      </div>

      <div className="absolute inset-[31.24%_0_0_0]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" className="block w-full h-full" src={folderFront} />
      </div>
    </div>
  );
}
